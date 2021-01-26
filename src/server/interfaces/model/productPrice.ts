import { Document } from 'mongoose'

export enum ProductName {
    Grechka = 'гречка'
}

export interface ProductPrice {
    name: ProductName
    avgPrice: number
}

export interface ProductPriceDoc extends ProductPrice, Document {
    createdAt: Date
}
