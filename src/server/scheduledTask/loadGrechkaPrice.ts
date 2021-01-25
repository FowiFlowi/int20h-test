import productPriceService from '@src/service/productPrice'

import { ScheduledTask, ScheduledTaskName } from '@interfaces/scheduled-task'
import { ProductName } from '@interfaces/model/productPrice'

class Task implements ScheduledTask {
    name: ScheduledTaskName = ScheduledTaskName.LoadGrechkaPrice

    async run() {
        return productPriceService.loadProductPrice(ProductName.Grechka)
    }
}

export default new Task()
