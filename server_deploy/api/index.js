var express_1 = require("express");
var api = express_1.Router();
api.get("/api", function (req, res, next) {
    res.json({
        api: "epic news here"
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = api;
