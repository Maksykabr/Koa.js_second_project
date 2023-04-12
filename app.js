const Koa = require('koa');
const app = new Koa();

const { koaBody } = require('koa-body');
const router = require('./router');


const PORT = 3000;


app.use(koaBody());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});