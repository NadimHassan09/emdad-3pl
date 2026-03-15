import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateOutboundOrderDto } from './dto/create-outbound-order.dto';
import { UpdateOutboundOrderDto } from './dto/update-outbound-order.dto';
import { OutboundOrderFilterDto } from './dto/outbound-order-filter.dto';
import { AddOutboundOrderItemDto } from './dto/add-outbound-order-item.dto';
export declare class OutboundOrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateOutboundOrderDto, createdByActorId: string): Promise<{
        client: {
            id: string;
            code: string;
            name: string;
        };
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        createdByActor: {
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            user: {
                id: string;
                email: string;
            } | null;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        id: string;
        orderNumber: string | null;
        status: import(".prisma/client").$Enums.OrderStatus;
        currentStage: string | null;
        expectedShipDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        createdByActorId: string;
    }>;
    findMany(filter?: OutboundOrderFilterDto): Promise<{
        items: {
            qtyOrdered: number;
            qtyShipped: number;
        }[];
    }[]>;
    private serializeOrder;
    findOne(id: string): Promise<{
        items: {
            qtyOrdered: number;
            qtyShipped: number;
        }[];
    }>;
    update(id: string, dto: UpdateOutboundOrderDto): Promise<{
        items: {
            qtyOrdered: number;
            qtyShipped: number;
        }[];
    }>;
    addItem(orderId: string, dto: AddOutboundOrderItemDto): Promise<{
        qtyOrdered: number;
        qtyShipped: number;
        product: {
            id: string;
            name: string;
            sku: string;
        };
        uom: {
            id: string;
            code: string;
            name: string;
        };
        id: string;
        createdAt: Date;
        updatedAt: Date;
        outboundOrderId: string;
        productId: string;
        uomId: string;
    }>;
}
