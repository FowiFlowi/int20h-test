import httpStatus from 'http-status'

import ApiError from './ApiError'

export default class ServiceUnavailableError extends ApiError {
    constructor(msg: string, data?: Record<string, unknown>) {
        super(msg, httpStatus.SERVICE_UNAVAILABLE, data)
    }
}
