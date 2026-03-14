import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../database/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

export interface UserWithRole {
  id: string;
  email: string;
  passwordHash: string | null;
  firstName: string;
  lastName: string;
  isActive: boolean;
  internalRole: {
    id: string;
    roleName: string;
    permissionsJson: unknown;
  } | null;
}

export interface UserRoleInfo {
  id: string;
  roleName: string;
}

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * List all internal user roles (for dropdowns in identity & access).
   */
  async findAllRoles(): Promise<UserRoleInfo[]> {
    try {
      return await this.prisma.userRole.findMany({
        where: { isActive: true },
        select: { id: true, roleName: true },
        orderBy: { roleName: 'asc' },
      });
    } catch (e) {
      console.error('[UsersService] findAllRoles failed:', e);
      return [];
    }
  }

  /**
   * List all internal users with their roles.
   * Used by admin UI for identity & access management.
   */
  async findMany(): Promise<UserWithRole[]> {
    const users = await this.prisma.user.findMany({
      include: {
        internalRole: {
          select: { id: true, roleName: true, permissionsJson: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
    return users as UserWithRole[];
  }

  /**
   * Update an internal user (profile, role, status, password).
   */
  async update(id: string, dto: UpdateUserDto): Promise<UserWithRole> {
    const existing = await this.prisma.user.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('User not found');

    if (dto.email !== undefined && dto.email !== existing.email) {
      const taken = await this.prisma.user.findUnique({
        where: { email: dto.email.trim().toLowerCase() },
      });
      if (taken) throw new ConflictException('Email already in use');
    }

    const data: Record<string, unknown> = {};
    if (dto.firstName !== undefined) data.firstName = dto.firstName.trim();
    if (dto.lastName !== undefined) data.lastName = dto.lastName.trim();
    if (dto.email !== undefined) data.email = dto.email.trim().toLowerCase();
    if (dto.internalRoleId !== undefined) data.internalRoleId = dto.internalRoleId;
    if (dto.isActive !== undefined) data.isActive = dto.isActive;
    if (dto.password !== undefined && dto.password.length > 0) {
      data.passwordHash = await bcrypt.hash(dto.password, 10);
    }

    const user = await this.prisma.user.update({
      where: { id },
      data,
      include: {
        internalRole: {
          select: { id: true, roleName: true, permissionsJson: true },
        },
      },
    });
    return user as UserWithRole;
  }

  /**
   * Find internal user by email; used by auth to resolve staff login.
   */
  async findUserByEmail(email: string): Promise<UserWithRole | null> {
    const user = await this.prisma.user.findFirst({
      where: { email: email.trim().toLowerCase(), isActive: true },
      include: {
        internalRole: {
          select: { id: true, roleName: true, permissionsJson: true },
        },
      },
    });
    return user as UserWithRole | null;
  }

  /**
   * Validate internal user credentials. Throws UnauthorizedException on failure.
   */
  async validateUserCredentials(
    email: string,
    password: string,
  ): Promise<UserWithRole> {
    const user = await this.findUserByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid email or password');

    if (!user.passwordHash)
      throw new UnauthorizedException('Invalid email or password');
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) throw new UnauthorizedException('Invalid email or password');

    return user;
  }
}
