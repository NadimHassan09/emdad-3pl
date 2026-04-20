"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseLocationsController = exports.LocationsController = void 0;
const common_1 = require("@nestjs/common");
const locations_service_1 = require("./locations.service");
const create_location_dto_1 = require("./dto/create-location.dto");
const update_location_dto_1 = require("./dto/update-location.dto");
let LocationsController = class LocationsController {
    constructor(locations) {
        this.locations = locations;
    }
    findTree() {
        return this.locations.findTree();
    }
    findFlat(warehouseId) {
        return this.locations.findFlat(warehouseId);
    }
};
exports.LocationsController = LocationsController;
__decorate([
    (0, common_1.Get)('tree'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocationsController.prototype, "findTree", null);
__decorate([
    (0, common_1.Get)('flat'),
    __param(0, (0, common_1.Query)('warehouseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LocationsController.prototype, "findFlat", null);
exports.LocationsController = LocationsController = __decorate([
    (0, common_1.Controller)('locations'),
    __metadata("design:paramtypes", [locations_service_1.LocationsService])
], LocationsController);
let WarehouseLocationsController = class WarehouseLocationsController {
    constructor(locations) {
        this.locations = locations;
    }
    create(warehouseId, dto) {
        return this.locations.create(warehouseId, dto);
    }
    findMany(warehouseId) {
        return this.locations.findManyByWarehouse(warehouseId);
    }
    update(warehouseId, id, dto) {
        return this.locations.update(id, warehouseId, dto);
    }
    remove(warehouseId, id) {
        return this.locations.remove(id, warehouseId);
    }
};
exports.WarehouseLocationsController = WarehouseLocationsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)('warehouseId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_location_dto_1.CreateLocationDto]),
    __metadata("design:returntype", void 0)
], WarehouseLocationsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('warehouseId', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WarehouseLocationsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('warehouseId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_location_dto_1.UpdateLocationDto]),
    __metadata("design:returntype", void 0)
], WarehouseLocationsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('warehouseId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], WarehouseLocationsController.prototype, "remove", null);
exports.WarehouseLocationsController = WarehouseLocationsController = __decorate([
    (0, common_1.Controller)('warehouses/:warehouseId/locations'),
    __metadata("design:paramtypes", [locations_service_1.LocationsService])
], WarehouseLocationsController);
//# sourceMappingURL=locations.controller.js.map