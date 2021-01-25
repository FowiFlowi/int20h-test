import config from '@config'

import productService from './product'

import ProductPriceModel from '@src/model/ProductPrice'

import productPriceDataMapper from '@src/dataMapper/productPrice'

import { ProductName, ProductPriceDoc } from '@interfaces/model/productPrice'
import { PriceResponse } from '@interfaces/service/productPrice'

class ProductPriceService {
    async loadProductPrice(name: ProductName): Promise<void> {
        const { products } = await productService.getProducts(ProductName.Grechka)
        const summedPrice: number = products.reduce((acc, product) => acc + product.price, 0)
        const avgPrice = summedPrice / products.length

        await ProductPriceModel.create({ name, avgPrice })
    }

    async getPrices(name: ProductName): Promise<PriceResponse[]> {
        const prices: ProductPriceDoc[] = await ProductPriceModel.find({ name }).limit(config.productPrices.limit)

        return prices.map(price => productPriceDataMapper.toEntity(price))
    }
}

export default new ProductPriceService()
