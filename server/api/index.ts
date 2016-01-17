import {Router} from "express";
import {Phys} from "./phys"

var api = Router();

api.get("/api", function(req, res, next) {
    res.json({
        api: "epic news here"
    })
});

export default api;