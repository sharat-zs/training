import { Server } from 'http'

export type Context = {
    headers?: Record<string, unknown>
    query?: Record<string, unknown>
    body?: Record<string, unknown>
    params?: Record<string, unknown>
    path: string
}

export type RouteHandler = (ctx: Context) => Promise<any>

export type RouteMethod = (path: string, handler: RouteHandler) => IApp

export interface IApp {
    get: RouteMethod
    put: RouteMethod
    post: RouteMethod
    delete: RouteMethod
    start: (port?: number) => Promise<Server>
}

export enum HttpMethod {
    Get = 'get',
    Post = 'post',
    Delete = 'delete',
    Put = 'put'
}

export enum HTTPStatus {
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NO_CONTENT = 204,
    PARTIAL_CONTENT = 206,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    CONFLICT = 409,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501
}
