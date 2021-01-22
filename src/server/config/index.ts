import { Level } from 'pino'

import Config, { Env } from '@interfaces/config'

const config: Config = {
    getEnv() {
        return <Env>process.env.NODE_ENV
    },
    isLocal() {
        return this.getEnv() === Env.Local
    },
    isDev() {
        return this.getEnv() === Env.Dev
    },
    isProd() {
        return this.getEnv() === Env.Prod
    },

    port: parseInt(<string>process.env.PORT, 10),

    db: {
        uri: <string>process.env.MONGODB_URI,
    },

    logger: {
        level: <Level>process.env.LOG_LEVEL,
    },

    zakaz: {
        host: <string>process.env.ZAKAZ_HOST,
        auchanStoreId: <string>process.env.ZAKAZ_AUCHAN_STORE_ID,
        novusStoreId: <string>process.env.ZAKAZ_NOVUS_STORE_ID,
        varusStoreId: <string>process.env.ZAKAZ_VARUS_STORE_ID,
    },

    products: {
        limit: parseInt(<string>process.env.PRODUCTS_LIMIT, 10),
    },
}

export default config
