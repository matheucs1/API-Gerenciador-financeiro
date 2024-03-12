const { verifyToken } = require("../middlewares/auth");
const { create, get, getId, removeSale, update, getTotal } = require("../controllers/sales");

exports.salesRoutes = app => {
    app.post("/sales", verifyToken, create);
    app.get("/sales", verifyToken, get);
    app.get("/sales/:id", verifyToken, getId);
    app.put("/sales/:id", verifyToken, update);
    app.delete("/sales/:id", verifyToken, removeSale);
    app.get("/sales/get/total", verifyToken, getTotal);
};