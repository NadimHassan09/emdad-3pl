"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientAccountGuard = void 0;
const common_1 = require("@nestjs/common");
const actor_type_enum_1 = require("../enums/actor-type.enum");
let ClientAccountGuard = class ClientAccountGuard {
    canActivate(context) {
        const request = context
            .switchToHttp()
            .getRequest();
        const user = request.user;
        if (!user ||
            user.actorType !== actor_type_enum_1.ActorType.CLIENT_ACCOUNT ||
            !user.clientId) {
            throw new common_1.ForbiddenException('This endpoint is only available to client portal accounts.');
        }
        return true;
    }
};
exports.ClientAccountGuard = ClientAccountGuard;
exports.ClientAccountGuard = ClientAccountGuard = __decorate([
    (0, common_1.Injectable)()
], ClientAccountGuard);
//# sourceMappingURL=client-account.guard.js.map