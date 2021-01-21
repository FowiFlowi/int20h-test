import httpStatus from 'http-status'

import ApiError from './ApiError'

export default class ValidationError extends ApiError {
    constructor(msg: string, data: unknown) {
        super(msg, httpStatus.UNPROCESSABLE_ENTITY, data)
    }
}
