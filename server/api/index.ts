import {Router} from "express";

var api = Router();

api.get("/api", function(req, res, next) {
    res.json({
        api: "epic news here"
    })
});


export default api;