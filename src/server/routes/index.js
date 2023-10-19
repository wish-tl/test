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
        ctx.body = {
            status: "errors",
        };
    }
});

router.get(`/prices/:id`, async (ctx) => {
    try {
        const list = await queries.getPriceByCode(ctx.params.id);
        const custom = await queries.getCustomByCode(ctx.params.id)
        ctx.body = {
            status: "success",
            data: {
                custom,
                list
            },
        };
    } catch (err) {
        console.log(err);
        ctx.body = {
            status: "errors",
        };
    }
});

router.post(`/prices/:id`, async (ctx) => {
    try {
        await queries.save(ctx.params.id, ctx.request.body);
        ctx.body = {
            status: "success"
        };
    } catch (err) {
        console.log(err);
        ctx.body = {
            status: "errors",
        };
    }
});

module.exports = router;