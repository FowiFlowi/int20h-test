import cron from 'node-cron'

import config from '@config'

import logger from '@src/logger'

import loadGrechkaPriceTask from './loadGrechkaPrice'

import { ScheduledTask, ScheduledTaskName } from '@interfaces/scheduled-task'

class ScheduledTasksManager {
    private readonly taskByName: Record<ScheduledTaskName, ScheduledTask> = {
        [ScheduledTaskName.LoadGrechkaPrice]: loadGrechkaPriceTask,
    }

    init(): void {
        Object.entries(config.scheduledTasks).forEach(([name, time]) => {
            const task: ScheduledTask = this.taskByName[<ScheduledTaskName>name]
            cron.schedule(time, async () => {
                logger.info(`Start running scheduled task [${name}]`)
                try {
                    await task.run()
                    logger.info(`Finished running scheduled task [${name}]`)
                } catch (err) {
                    logger.error({ err }, `Failed running scheduled task [${name}]`)
                }
            })
            logger.info(`Scheduled task [${name}]: ${time}`)
        })
    }
}

export default new ScheduledTasksManager()
