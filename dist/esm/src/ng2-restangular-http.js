"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var rxjs_1 = require('rxjs');
var ng2_restangular_helper_1 = require('./ng2-restangular-helper');
var RestangularHttp = (function () {
    function RestangularHttp(http) {
        this.http = http;
    }
    RestangularHttp.prototype.createRequest = function (options) {
        var requestOptions = ng2_restangular_helper_1.RestangularHelper.createRequestOptions(options);
        var request = new http_1.Request(requestOptions);
        return this.request(request);
    };
    RestangularHttp.prototype.request = function (request) {
        var _this = this;
        return this.http.request(request)
            .map(function (response) {
            response.config = { params: request };
            return response;
        })
            .map(function (response) {
            if (response._body) {
                response.data = typeof response._body == 'string' ? JSON.parse(response._body) : response._body;
            }
            else {
                response.data = null;
            }
            return response;
        })
            .catch(function (err) {
            err.data = typeof err._body == 'string' ? JSON.parse(err._body) : err._body;
            err.request = request;
            err.repeatRequest = function (newRequest) {
                return _this.request(newRequest || request);
            };
            return rxjs_1.Observable.throw(err);
        });
    };
    RestangularHttp.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    RestangularHttp.ctorParameters = function () { return [
        { type: http_1.Http, },
    ]; };
    return RestangularHttp;
}());
exports.RestangularHttp = RestangularHttp;
//# sourceMappingURL=ng2-restangular-http.js.map