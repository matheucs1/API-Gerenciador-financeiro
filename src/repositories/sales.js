const { prisma } = require("../services/prisma");

exports.createSale = async (data) => {
    const sale = await prisma.sales.create({
        data,
    });
    return sale;
};

exports.getSales = async () => {
    const sales = await prisma.sales.findMany({})
    return sales;
};

exports.getById = async (id) => {
    const sale = await prisma.sales.findUnique({
        where: {
            id,
        }
    });
    return sale;
}

exports.updateSale = async (id, data) => {
    const sale = await prisma.sales.update({
        where: {
            id,
        },
        data
    });
    return sale;
};

exports.removeSale = async (id) => {
    await prisma.sales.delete({
        where: {
            id
        }
    });
    return;
};

exports.getTotals = async () => {
    const purchase = await prisma.sales.aggregate({
        _sum: {
            total_money_purchase: true
        }
    });

    const sales = await prisma.sales.aggregate({
        _sum: {
            total_money_sale: true
        }
    });

    const totalPurchase = purchase?._sum?.total_money_purchase
    const totalSales = sales?._sum?.total_money_sale
    const totalMoney = totalSales - totalPurchase;
    return { totalPurchase, totalSales, totalMoney };
};