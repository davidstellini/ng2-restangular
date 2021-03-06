"use strict";
/* tslint:disable:member-ordering no-unused-variable */
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var ng2_restangular_config_1 = require('./ng2-restangular.config');
var ng2_restangular_1 = require('./ng2-restangular');
var ng2_restangular_http_1 = require('./ng2-restangular-http');
exports.CONFIG_OBJ = new core_1.OpaqueToken('configObj');
var RestangularModule = (function () {
    function RestangularModule(parentModule) {
        if (parentModule) {
            throw new Error('RestangularModule is already loaded. Import it in the AppModule only');
        }
    }
    RestangularModule.forRoot = function (config1, config2) {
        return {
            ngModule: RestangularModule,
            providers: [
                { provide: exports.CONFIG_OBJ, useValue: [config1, config2] },
                { provide: ng2_restangular_config_1.RESTANGULAR, useFactory: ng2_restangular_config_1.RestangularFactory, deps: [exports.CONFIG_OBJ] },
            ]
        };
    };
    RestangularModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [http_1.HttpModule],
                    providers: [ng2_restangular_http_1.RestangularHttp, ng2_restangular_1.Restangular]
                },] },
    ];
    /** @nocollapse */
    RestangularModule.ctorParameters = function () { return [
        { type: RestangularModule, decorators: [{ type: core_1.Optional }, { type: core_1.SkipSelf },] },
    ]; };
    return RestangularModule;
}());
exports.RestangularModule = RestangularModule;
//# sourceMappingURL=ng2-restangular.module.js.map