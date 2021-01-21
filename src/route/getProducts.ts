import { JSONSchemaType } from 'ajv'

import { Route, RouteParams } from '@interfaces/route'
import { RouteRequestData, RouteResponse } from '@interfaces/route/getProducts'

class GetProductsRoute implements Route<RouteRequestData> {
    validationSchema: JSONSchemaType<RouteRequestData> = {
        type: 'object',
        properties: {
            search: { type: 'string', nullable: true },
        },
        required: [],
    }

    async handler({ data }: RouteParams<RouteRequestData>): Promise<RouteResponse> {
        return { products: [{ name: 'kek' }] }
    }
}

export default new GetProductsRoute()
