import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../database/prisma/prisma.service';

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

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

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
