import Koa from 'koa'
import Router from '@koa/router'
import cors from '@koa/cors'
import Ajv from 'ajv'

import ValidationError from '@src/errors/ValidationError'

import getProducts from './getProducts'
import getPrices from './getPrices'

class RouteHandler {
    private readonly router = new Router()

    private readonly ajv = new Ajv({ coerceTypes: true, useDefaults: true })

    set(app: Koa) {
        this.router.get('/api/products', this.handleRoute(getProducts))
        this.router.get('/api/product/prices', this.handleRoute(getPrices))

        app.use(this.router.routes())
        app.use(this.router.allowedMethods())
        app.use(cors())
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private handleRoute(route: any): Koa.Middleware {
        const { validationSchema } = route
        const validate = validationSchema && this.ajv.compile({ ...validationSchema, additionalProperties: false })

        return async (ctx, next) => {
            const data: Record<string, unknown> = Object.assign({}, ctx.query, ctx.body)
            if (!validate || validate(data)) {
                ctx.response.body = await route.handler({ data })

                return next()
            }

            throw new ValidationError('Request data is not valid', validate.errors)
        }
    }
}

export default new RouteHandler()
