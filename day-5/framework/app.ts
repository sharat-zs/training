import Koa, { Next } from 'koa'
import Router, { RouterContext } from 'koa-router'
import http, { Server } from 'http'
import bodyParser from 'koa-bodyparser'
import { Context, HttpMethod, HTTPStatus, IApp, RouteHandler } from './types'

export default class App implements IApp {
    private readonly koa = new Koa()

    private readonly router = new Router()

    constructor() {
        this.koa.use(bodyParser())
        this.koa.use(this.router.routes())
        this.koa.use(this.router.allowedMethods())
    }

    get(path: string, handler: RouteHandler) {
        this.registerRoute(HttpMethod.Get, path, handler)
        return this
    }

    put(path: string, handler: RouteHandler) {
        this.registerRoute(HttpMethod.Put, path, handler)
        return this
    }

    post(path: string, handler: RouteHandler) {
        this.registerRoute(HttpMethod.Post, path, handler)
        return this
    }

    delete(path: string, handler: RouteHandler) {
        this.registerRoute(HttpMethod.Delete, path, handler)
        return this
    }

    start(port: number = 8000) {
        return new Promise<Server>((resolve) => {
            const httpServer = this.koa.listen(
                http.createServer(this.koa.callback()).listen(port),
                () => {
                    console.info(`http server started on port ${port}`)
                    resolve(httpServer)
                }
            )
        })
    }

    private registerRoute(
        method: HttpMethod,
        path: string,
        handler: RouteHandler
    ) {
        this.router.register(path, [method], createRouteMiddleware(handler))
    }
}

function createRouteMiddleware(handler: RouteHandler) {
    return async (ctx: RouterContext, next: Next) => {
        try {
            const res = await handler(transformContext(ctx))
            let status = HTTPStatus.OK
            let body = res
            const { method } = ctx.request
            if (method === 'POST') status = HTTPStatus.CREATED
            if (method === 'DELETE') status = HTTPStatus.NO_CONTENT
            body = { data: res, status }
            if (!res) body = undefined
            ctx.response.body = body
            ctx.response.status = status
        } catch (err) {
            console.error(err)
            ctx.response.body = {
                message: err.message ?? 'Internal Server Error',
                code: err.code ?? 'UNKOWN_ERROR'
            }
            ctx.response.status = err.status ?? 500
        }

        return next()
    }
}

function transformContext(ctx: RouterContext): Context {
    return {
        headers: ctx.request.headers,
        query: ctx.request.query,
        body: ctx.request.body,
        params: ctx.params,
        path: ctx.path
    }
}
