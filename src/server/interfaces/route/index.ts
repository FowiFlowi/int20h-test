import { JSONSchemaType } from 'ajv'

export interface Route<T> {
    validationSchema?: JSONSchemaType<T, false>
    handler(params: RouteParams<T>): Promise<unknown>
}

export interface RouteParams<T> {
    data: T
}
