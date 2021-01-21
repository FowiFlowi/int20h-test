import * as Koa from 'koa'
import koaBodyparser from 'koa-bodyparser'
import koaStatic from 'koa-static'

import { alsMiddleware } from './als'
import { loggerMiddleware } from './logger'
import { errorHandlerMiddleware } from './errorHandler'

class Middleware {
    set(app: Koa) {
        app.use(koaStatic('./public'))
            .use(alsMiddleware)
            .use(errorHandlerMiddleware)
            .use(koaBodyparser())
            .use(loggerMiddleware)
    }
}

export default new Middleware()
