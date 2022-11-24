// @ts-check

const Koa = require('koa')
const Pug = require('koa-pug')
const path = require('path')

const app = new Koa()

// @ts-ignore
new Pug({
  viewPath: path.resolve(__dirname, './views'),
  app, // Binding `ctx.render()`, equals to pug.use(app)
})

app.use(async (ctx) => {
  await ctx.render('main')
})

app.listen(4000)
