const Koa = require('koa')
const Router = require('koa-router')
const db = require('../db')

const app = new Koa()
const router = new Router()

app.use(router.routes())
   .listen(8080)
