import Koa from 'koa'
import { v4 as uuid } from 'uuid'

import als from '@src/als'

import { AsyncLocalStorageData } from '@interfaces/als'

export const alsMiddleware: Koa.Middleware = function(ctx, next) {
    const alsData: AsyncLocalStorageData = {
        requestId: uuid(),
    }

    return als.run(alsData, async () => {
        await next()
    })
}
