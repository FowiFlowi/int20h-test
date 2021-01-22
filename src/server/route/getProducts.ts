import { JSONSchemaType } from 'ajv'

import productService from '@src/service/product'

import { Route, RouteParams } from '@interfaces/route'
import { RouteRequestData, RouteResponse } from '@interfaces/route/getProducts'

class GetProductsRoute implements Route<RouteRequestData> {
    validationSchema: JSONSchemaType<RouteRequestData> = {
        type: 'object',
        properties: {
            search: { type: 'string', default: 'гречка', minLength: 3 },
            sort: { type: 'number', enum: [-1, 1], default: 1 },
            weight: { type: 'number', nullable: true },
        },
        required: [],
    }

    async handler(params: RouteParams<RouteRequestData>): Promise<RouteResponse> {
        const { data: { search, sort, weight } } = params

        return productService.getProducts(search, sort, weight)
    }
}

export default new GetProductsRoute()
