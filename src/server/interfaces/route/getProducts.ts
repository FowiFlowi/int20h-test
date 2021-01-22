import { ProductSort } from '@interfaces/service/product'
import { SearchProductsResponse } from '@interfaces/service/provider/shop'

export interface RouteRequestData {
    search: string
    sort: ProductSort
    weight?: number
}

export type RouteResponse = SearchProductsResponse
