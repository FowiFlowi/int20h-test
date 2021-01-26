import { ScheduledTaskName } from '@interfaces/scheduled-task'
import { Level } from 'pino'

export enum Env {
    Local = 'local',
    Dev = 'development',
    Prod = 'production'
}

export default interface Config {
    getEnv(): Env
    isLocal(): boolean
    isDev(): boolean
    isProd(): boolean
    port: number
    db: {
        uri: string
    }
    logger: {
        level: Level
    }
    zakaz: {
        host: string
        auchanStoreId: string
        novusStoreId: string
        varusStoreId: string
    }
    products: {
        limit: number
        defaultSearch: string
    }
    productPrices: {
        limit: number
    }
    scheduledTasks: Record<ScheduledTaskName, string>
}
