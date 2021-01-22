export enum SortOption {
    PriceAsc = 'price_asc',
    PriceDesc = 'price_desc'
}

export interface ZakazProduct {
    title: string
    price: number
    web_url: string
    weight: number
    producer: {
        trademark?: string
        logo: {
            s64x64?: string
        }
    }
    img: {
        s200x200?: string
    }
}

export interface ZakazResponse {
    count: number
    results: ZakazProduct[]
}
