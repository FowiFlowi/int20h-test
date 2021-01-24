import { SearchProductsResponse, ShopName } from '@interfaces/service/provider/shop'
import { ZakazResponse } from '@interfaces/service/provider/shop/zakaz'
import { generateUUID } from '@src/utils/uuid'

class ProductDataMapper {
    toEntity(data: ZakazResponse, shopName: ShopName): SearchProductsResponse {
        const { count, results } = data

        return {
            count,
            products: results.map(({ title, price, producer, img, web_url, weight }) => ({
                shopName,
                name: title,
                price,
                url: web_url,
                weight,
                img: img.s200x200,
                uuid: generateUUID(),
                producer: {
                    name: producer.trademark,
                    logo: producer.logo?.s64x64,
                },
            })),
        }
    }
}

export default new ProductDataMapper()
