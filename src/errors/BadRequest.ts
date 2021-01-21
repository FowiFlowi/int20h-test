import httpStatus from 'http-status'

import ApiError from './ApiError'

export default class BadRequestError extends ApiError {
    constructor(msg: string, data?: Record<string, unknown>) {
        super(msg, httpStatus.BAD_REQUEST, data)
    }
}
