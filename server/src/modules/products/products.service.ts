import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductFilterDto } from './dto/product-filter.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { ActorType } from '../../common/enums/actor-type.enum';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateProductDto) {
    await this.prisma.client.findUniqueOrThrow({ where: { id: dto.clientId } });
    await this.prisma.uom.findUniqueOrThrow({
      where: { id: dto.defaultUomId },
    });
    return this.prisma.product.create({
      data: {
        clientId: dto.clientId,
        sku: dto.sku.trim(),
        name: dto.name.trim(),
        defaultUomId: dto.defaultUomId,
        minThreshold: dto.minThreshold ?? 0,
        isActive: dto.isActive ?? true,
      },
      include: { defaultUom: { select: { id: true, code: true, name: true } } },
    });
  }

  async findMany(filter?: ProductFilterDto, payload?: JwtPayload) {
    const where: { clientId?: string; isActive?: boolean } = {};
    if (
      payload?.actorType === ActorType.CLIENT_ACCOUNT &&
      payload.clientId
    ) {
      // Client portal can only read products for its own client.
      where.clientId = payload.clientId;
    } else if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.isActive !== undefined) where.isActive = filter.isActive;
    return this.prisma.product.findMany({
      where,
      include: { defaultUom: { select: { id: true, code: true, name: true } } },
      orderBy: { sku: 'asc' },
    });
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { client: true, defaultUom: true },
    });
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  async update(id: string, dto: UpdateProductDto) {
    await this.findOne(id);
    if (dto.defaultUomId)
      await this.prisma.uom.findUniqueOrThrow({
        where: { id: dto.defaultUomId },
      });
    return this.prisma.product.update({
      where: { id },
      data: {
        ...(dto.sku !== undefined && { sku: dto.sku.trim() }),
        ...(dto.name !== undefined && { name: dto.name.trim() }),
        ...(dto.defaultUomId !== undefined && {
          defaultUomId: dto.defaultUomId,
        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}

        }),
        ...(dto.minThreshold !== undefined && {
          minThreshold: dto.minThreshold,
        }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}
