import { JSONSchemaType } from 'ajv'

import productPriceService from '@src/service/productPrice'

import { Route, RouteParams } from '@interfaces/route'
import { RouteRequestData, RouteResponse } from '@interfaces/route/getPrices'
import { ProductName } from '@interfaces/model/productPrice'

class GetPricesRoute implements Route<RouteRequestData> {
    validationSchema: JSONSchemaType<RouteRequestData> = {
        type: 'object',
        properties: {
            product: { type: 'string', enum: Object.values(ProductName), default: ProductName.Grechka, nullable: true },
        },
        required: [],
    }

    async handler(params: RouteParams<RouteRequestData>): Promise<RouteResponse> {
        const { data: { product } } = params

        return { prices: await productPriceService.getPrices(product) }
    }
}

export default new GetPricesRoute()
