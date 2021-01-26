import 'module-alias/register'
import 'dotenv-safe/config'
import Koa from 'koa'
import mongoose from 'mongoose'

import config from '@config'

import logger from '@src/logger'

import middleware from '@src/middleware'
import route from '@src/route'
import scheduledTask from '@src/scheduledTask'

class Main {
    private static readonly app = new Koa()

    static async start() {
        logger.info(`Starting application in ${config.getEnv()} env`)

        middleware.set(this.app)
        route.set(this.app)

        await mongoose.connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        logger.info('Connected to the database')

        scheduledTask.init()

        this.app.listen(
            config.port,
            () => logger.info(`Application started on ${config.port} port`)
        )
    }
}

Main.start()
