import { PrismaService } from '../../database/prisma/prisma.service';
import { InventoryService } from '../inventory/inventory.service';
import { CreateInboundOrderDto } from './dto/create-inbound-order.dto';
import { UpdateInboundOrderDto } from './dto/update-inbound-order.dto';
import { InboundOrderFilterDto } from './dto/inbound-order-filter.dto';
import { AddInboundOrderItemDto } from './dto/add-inbound-order-item.dto';
import { ReceiveInboundOrderDto } from './dto/receive-inbound-order.dto';
export declare class InboundOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateInboundOrderDto, createdByActorId: string): Promise<{
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
        expectedDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        createdByActorId: string;
    }>;
    findMany(filter?: InboundOrderFilterDto): Promise<{
        items: {
            qtyOrdered: number;
            qtyReceived: number;
        }[];
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
        id: string;
        orderNumber: string | null;
        status: import(".prisma/client").$Enums.OrderStatus;
        currentStage: string | null;
        expectedDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        createdByActorId: string;
    }[]>;
    findOne(id: string): Promise<{
        items: {
            qtyOrdered: number;
            qtyReceived: number;
            batches: {
                qtyReceived: number;
            }[];
        }[];
    }>;
    private serializeOrder;
    update(id: string, dto: UpdateInboundOrderDto): Promise<{
        items: {
            qtyOrdered: number;
            qtyReceived: number;
            batches: {
                qtyReceived: number;
            }[];
        }[];
    }>;
    addItem(orderId: string, dto: AddInboundOrderItemDto): Promise<{
        qtyOrdered: number;
        qtyReceived: number;
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
        inboundOrderId: string;
        productId: string;
        uomId: string;
    }>;
    receive(orderId: string, dto: ReceiveInboundOrderDto): Promise<{
        items: {
            qtyOrdered: number;
            qtyReceived: number;
            batches: {
                qtyReceived: number;
            }[];
        }[];
    }>;
}
