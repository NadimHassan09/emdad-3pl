"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientPortalTeamModule = void 0;
const common_1 = require("@nestjs/common");
const actors_module_1 = require("../actors/actors.module");
const mail_module_1 = require("../mail/mail.module");
const client_portal_team_controller_1 = require("./client-portal-team.controller");
const client_portal_team_service_1 = require("./client-portal-team.service");
let ClientPortalTeamModule = class ClientPortalTeamModule {
};
exports.ClientPortalTeamModule = ClientPortalTeamModule;
exports.ClientPortalTeamModule = ClientPortalTeamModule = __decorate([
    (0, common_1.Module)({
        imports: [actors_module_1.ActorsModule, mail_module_1.MailModule],
        controllers: [client_portal_team_controller_1.ClientPortalTeamController],
        providers: [client_portal_team_service_1.ClientPortalTeamService],
    })
], ClientPortalTeamModule);
//# sourceMappingURL=client-portal-team.module.js.map