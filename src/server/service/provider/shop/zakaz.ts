import querystring from 'querystring'

import got, { Response } from 'got'

import config from '@config'

import productDataMapper from '@src/dataMapper/product'

import { SearchProductsResponse, ShopName, ShopProvider } from '@interfaces/service/provider/shop'
import { SortOption, ZakazResponse } from '@interfaces/service/provider/shop/zakaz'
import { ProductSort } from '@interfaces/service/product'

class ZakazShopProvider implements ShopProvider {
    private readonly storeIdByShopName: Record<ShopName, string> = {
        [ShopName.Auchan]: config.zakaz.auchanStoreId,
        [ShopName.Novus]: config.zakaz.novusStoreId,
        [ShopName.Varus]: config.zakaz.varusStoreId,
    }

    private readonly mapProductSort: Map<number, SortOption> = new Map([
        [1, SortOption.PriceAsc],
        [-1, SortOption.PriceDesc],
    ])

    async searchProducts(query: string, shopName: ShopName, sort?: ProductSort, weight?: number): Promise<SearchProductsResponse> {
        const qs: string = querystring.stringify({
            q: query,
            sort: sort && this.mapProductSort.get(sort),
            weight: weight && `${weight}g`,
        })
        const path = `/stores/${this.storeIdByShopName[shopName]}/products/search?${qs}`

        const response: ZakazResponse = await this.makeApiCall(path)

        return productDataMapper.toEntity(response, shopName)
    }

    private async makeApiCall(path: string): Promise<ZakazResponse> {
        const url = `${config.zakaz.host}${path}`

        const response: Response<ZakazResponse> = await got.get(url, {
            responseType: 'json',
            headers: { 'accept-language': 'uk' },
        })

        return response.body
    }
}

export default new ZakazShopProvider()
