import { ProductPriceDoc } from '@interfaces/model/productPrice'
import { PriceResponse } from '@interfaces/service/productPrice'

class ProductPriceDataMapper {
    toEntity(doc: ProductPriceDoc): PriceResponse {
        return {
            price: doc.avgPrice,
            time: doc.createdAt,
        }
    }
}

export default new ProductPriceDataMapper()
