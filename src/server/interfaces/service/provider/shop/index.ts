import { ProductSort } from '@interfaces/service/product'

export enum ShopName {
    Auchan = 'auchan',
    Novus = 'novus',
    Varus = 'varus'
}

export interface Product {
    shopName: ShopName
    name: string
    price: number
    url: string
    weight: number
    img?: string
    producer: {
        name?: string
        logo?: string
    }
}

export interface SearchProductsResponse {
    products: Product[]
    count: number
}

export interface ShopProvider {
    searchProducts(query: string, sort: ProductSort, shopName: ShopName, weight?: number): Promise<SearchProductsResponse>
}
