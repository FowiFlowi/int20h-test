export interface Product {
    name: string
    price: string
    producer: {
        name: string
        logo: string
    }
}

export interface SearchProductsResponse {
    products: Product[]
    count: number
}

export interface ShopProvider {
    searchProducts(query: string): Promise<SearchProductsResponse>
}
