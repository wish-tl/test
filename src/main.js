const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

const app = new Koa();

const indexRoutes = require("./server/routes/index");

app.use(bodyParser()); // 在路由之前加入中间件
app.use(indexRoutes.routes());

const PORT = 4000;

const server = app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`);
});