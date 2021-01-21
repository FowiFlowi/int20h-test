export interface ZakazProduct {
    title: string
    price: number
    producer: {
        trademark: string
        logo: {
            s64x64: string
        }
    }
    img: {
        s200x200: string
    }
}

export interface ZakazResponse {
    count: number
}
