import Koa from 'koa'

import logger from '@src/logger'

export const loggerMiddleware: Koa.Middleware = async function(ctx, next) {
    const t0: number = Date.now()
    logger.info(ctx.query, `->IN ${ctx.path}`)

    await next()

    logger.info(`<-OUT ${ctx.path} in ${Date.now() - t0}ms`)
}
