const Router = require("koa-router");
const router = new Router();

const Task = require("../api/task");

router.post('/task', async(ctx) => {
    try{
        const result = await Task.addTask({...ctx.request.body});
        ctx.body = result;
    }
    catch(err){
        console.error('err', err);
        ctx.status = 500;
        ctx.body = 'Internal error';
    };
});

router.get('/', async ctx => {
    ctx.body = 'hello new website!';
});

module.exports = router;
