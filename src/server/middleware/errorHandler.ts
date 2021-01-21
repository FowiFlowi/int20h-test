import Koa from 'koa'
import httpStatus from 'http-status'

import logger from '@src/logger'

export const errorHandlerMiddleware: Koa.Middleware = async function(ctx, next) {
    try {
        await next()
    } catch (err) {
        ctx.status = err.httpStatus || httpStatus.SERVICE_UNAVAILABLE
        ctx.body = { error: { message: err.message, data: err.data } }

        logger.error({ err }, 'Request failed')
    }
}
