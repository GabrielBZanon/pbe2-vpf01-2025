const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const { data, hora, valor, clienteId, pizzas } = req.body;
        const pedido = await prisma.pedido.create({
            data: {
                data,
                hora,
                valor,
                cliente: { connect: { id: clienteId } },
                itens: {
                    create: pizzas.map(pizza => ({
                        pizza: { connect: { id: pizza.pizzaId } },
                        quantidade: pizza.quantidade,
                        valor: pizza.valor,
                        subtotal: pizza.quantidade * pizza.valor
                    }))
                }
            },
            include: {
                itens: { include: { pizza: true } }
            }
        });
        return res.status(201).json(pedido);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const read = async (req, res) => {
    try {
        const pedidos = await prisma.pedido.findMany({
            include: {
                cliente: true,
                itens: { include: { pizza: true } }
            }
        });
        return res.json(pedidos);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const readOne = async (req, res) => {
    try {
        const pedido = await prisma.pedido.findUnique({
            where: { id: parseInt(req.params.id) },
            include: {
                cliente: true,
                itens: { include: { pizza: true } }
            }
        });
        if (!pedido) {
            return res.status(404).json({ error: "Pedido não encontrado" });
        }
        return res.json(pedido);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { data, hora, valor, clienteId, pizzas } = req.body;
        const pedido = await prisma.pedido.update({
            where: { id: parseInt(req.params.id) },
            data: {
                data,
                hora,
                valor,
                cliente: { connect: { id: clienteId } },
                itens: {
                    deleteMany: {},
                    create: pizzas.map(pizza => ({
                        pizza: { connect: { id: pizza.pizzaId } },
                        quantidade: pizza.quantidade,
                        valor: pizza.valor,
                        subtotal: pizza.quantidade * pizza.valor
                    }))
                }
            },
            include: {
                itens: { include: { pizza: true } }
            }
        });
        return res.status(202).json(pedido);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    try {
        await prisma.pedido.delete({
            where: { id: parseInt(req.params.id) }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = { create, read, readOne, update, remove };
