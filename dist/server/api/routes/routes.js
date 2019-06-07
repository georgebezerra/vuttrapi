"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../../modules/User/routes");
var auth_1 = require("../../modules/auth/auth");
var routes_2 = require("../../modules/tools/routes");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.initRoutes = function (app, auth) {
        app.route("/api/users/all").all(auth.config().authenticate()).get(routes_1.default.index);
        app.route("/api/users/create").all(auth.config().authenticate()).post(routes_1.default.create);
        app.route("/api/users/:id").all(auth.config().authenticate()).get(routes_1.default.findOne);
        app.route("/api/users/:id/update").all(auth.config().authenticate()).put(routes_1.default.update);
        app.route("/api/users/:id/destroy").all(auth.config().authenticate()).delete(routes_1.default.destroy);
        app.route("/token").post(auth_1.default.auth);
        app.route("/api/tool/all").get(routes_2.default.index);
        app.route("/api/tool/create").post(routes_2.default.create);
        app.route("/api/tool/:id").get(routes_2.default.findOne);
        app.route("/api/tool/:id/update").put(routes_2.default.update);
        app.route("/api/tool/:id/destroy").delete(routes_2.default.destroy);
    };
    return Routes;
}());
exports.default = new Routes();
