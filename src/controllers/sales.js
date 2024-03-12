const { salesValidation, updateSalesValidation } = require("../validations/sales.js");
const { createSale, getSales, getById, updateSale, removeSale, getTotals } = require("../repositories/sales");

exports.create = async (req, res) => {
    try {
        const data = salesValidation.parse(req.body);
        const sales = await createSale(data);
        res.status(200).send(sales);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.get = async (req, res) => {
    try {
        const sales = await getSales();
        res.status(200).send(sales);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.getId = async (req, res) => {
    try {
        const sales = await getById(Number(req.params.id));
        res.status(200).send(sales);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.update = async (req, res) => {
    try {
        const data = updateSalesValidation.parse(req.body);
        const sales = await updateSale(Number(req.params.id), data);
        res.status(200).send(sales);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.removeSale = async (req, res) => {
    try {
        await removeSale(Number(req.params.id))
        res.status(200).send("Deletado com sucesso!");
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.getTotal = async (req, res) => {
    try {
        const total = await getTotals();
        res.status(200).send(total);
    } catch (e) {
        res.status(400).send(e);
    }
}