import { ActorType } from '../enums/actor-type.enum';
export interface JwtPayload {
    actorId: string;
    actorType: ActorType;
    sub: string;
    clientId?: string;
    role: string;
    permissions: string[];
    type: 'access' | 'refresh';
}
