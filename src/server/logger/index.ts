import pino from 'pino'

import config from '@config'

import als from '@src/als'

import { AsyncLocalStorageData } from '@interfaces/als'

function mixin() {
    const data: AsyncLocalStorageData | undefined = als.getStore()

    return data || {}
}

export default pino({ ...config.logger, mixin })
