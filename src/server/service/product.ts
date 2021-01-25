import config from '@config'

import logger from '@src/logger'

import zakazShopProvider from './provider/shop/zakaz'

import { Product, SearchProductsResponse, ShopName, ShopProvider } from '@interfaces/service/provider/shop'
import ServiceUnavailableError from '@src/errors/ServiceUnavailableError'
import { ProductSort } from '@interfaces/service/product'

class ProductService {
    private readonly shopProvider: ShopProvider = zakazShopProvider

    async getProducts(query: string, sort: ProductSort = 1, weight?: number): Promise<SearchProductsResponse> {
        const tasks: Promise<SearchProductsResponse>[] = Object.values(ShopName).map(shopName => this.shopProvider.searchProducts(
            query,
            shopName,
            sort,
            weight
        ))
        try {
            const responses: SearchProductsResponse[] = await Promise.all(tasks)

            return this.processProductResponses(responses, sort)
        } catch (err) {
            const msg = 'Failed to receive products from shops'
            logger.error({ err }, msg)

            throw new ServiceUnavailableError(msg)
        }
    }

    private processProductResponses(responses: SearchProductsResponse[], sort: ProductSort): SearchProductsResponse {
        const result: SearchProductsResponse = { count: 0, products: [] }
        responses.forEach(({ count, products }) => {
            result.count += count
            result.products = result.products.concat(products)
        })

        result.products = result.products
            .sort(sort === 1 ? this.ascSort : this.descSort)
            .slice(0, config.products.limit)

        return result
    }

    private ascSort(a: Product, b: Product): number {
        return a.price - b.price
    }

    private descSort(a: Product, b: Product): number {
        return b.price - a.price
    }
}

export default new ProductService()
