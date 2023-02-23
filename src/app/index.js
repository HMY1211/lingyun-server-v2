const Koa = require('koa');
const { koaBody } = require('koa-body');
const router = require('../router/index');
// 实例化koa对象;
const app = new Koa();
// 注册koa-body,用于解析请求数据;
app.use(koaBody());

// 注册路由并判断请求方式是否支持;
app.use(router.routes()).use(router.allowedMethods());

module.exports = app;