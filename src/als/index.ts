import { AsyncLocalStorage } from 'async_hooks'

import { AsyncLocalStorageData } from '@interfaces/als'

const als: AsyncLocalStorage<AsyncLocalStorageData> = new AsyncLocalStorage()

export default als
