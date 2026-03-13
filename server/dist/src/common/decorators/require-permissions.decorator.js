"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequirePermissions = void 0;
const common_1 = require("@nestjs/common");
const auth_constants_1 = require("../constants/auth.constants");
const RequirePermissions = (...permissions) => (0, common_1.SetMetadata)(auth_constants_1.AUTH.REQUIRE_PERMISSIONS_KEY, permissions);
exports.RequirePermissions = RequirePermissions;
//# sourceMappingURL=require-permissions.decorator.js.map