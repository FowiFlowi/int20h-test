export default class ApiError extends Error {
    constructor(
        message: string,
        public httpStatus: number,
        public data?: unknown
    ) {
        super()

        this.message = message
    }
}
