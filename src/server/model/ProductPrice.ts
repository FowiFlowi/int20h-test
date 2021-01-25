import { model, Schema } from 'mongoose'

import { ProductName, ProductPriceDoc } from '@interfaces/model/productPrice'

const commandAclItemSchema: Schema = new Schema(
    {
        name: { type: String, enum: Object.values(ProductName), required: true },
        avgPrice: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
)

export default model<ProductPriceDoc>('ProductPrice', commandAclItemSchema)
