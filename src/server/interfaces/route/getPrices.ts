import { ProductName } from '@interfaces/model/productPrice'
import { PriceResponse } from '@interfaces/service/productPrice'

export interface RouteRequestData {
    product: ProductName
}

export type RouteResponse = {
    prices: PriceResponse[]
}
