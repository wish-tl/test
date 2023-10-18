const Router = require("koa-router");

const queries = require("../db/queries/index");

const router = new Router();

router.get("/all", async (ctx) => {
    try {
        const list = await queries.getAll();
        ctx.body = {
            status: "success",
            data: list,
        };
    } catch (err) {
        console.log(err);
    }
});

router.get(`/prices/:id`, async (ctx) => {
    try {
        const data = await queries.getPriceByCode(ctx.params.id);
        if (data.length) {
            ctx.body = {
                status: "success",
                data: data,
            };
        } else {
            ctx.status = 404;
            ctx.body = {
                status: "error",
                message: "That does not exist.",
            };
        }
    } catch (err) {
        console.log(err);
    }
});

router.post(`/prices/:id`, async (ctx) => {
    try {
        const data = await queries.getPriceByCode(ctx.params.id);
        if (data.length) {
            await queries.updatePrice(ctx.params.id, ctx.request.body);
        } else {
            await queries.addPrice(ctx.request.body);
        }
        ctx.status = 201;
        ctx.body = {
            status: "success",
        };
    } catch (err) {
        ctx.status = 400;
        ctx.body = {
            status: "error",
            message: err.message || "Sorry, an error has occurred.",
        };
    }
});

module.exports = router;