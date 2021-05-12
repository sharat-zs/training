import { Context, StandardError } from '../framework'
import { TodoService } from './service'
import { CreateTodoBody, ITodoController, ITodoService } from './types'

export class Controller implements ITodoController {
    static instance: ITodoController

    static getInstance() {
        if (this.instance === undefined)
            this.instance = new Controller(TodoService.getInstance())
        return this.instance
    }

    constructor(private readonly service: ITodoService) {}

    getList: (ctx: Context) => Promise<any> = async (_ctx) => {
        return this.service.getList()
    }

    createItem: (ctx: Context) => Promise<any> = async (ctx) => {
        const data = ctx.body
        if (data === undefined || !isValidCreateTodoBody(data))
            throw new StandardError('Bad request', 'BAD_REQUEST', 400)
        return this.service.createItem(data)
    }
}

function isValidCreateTodoBody(data: unknown): data is CreateTodoBody {
    return (
        (data as CreateTodoBody).title !== undefined &&
        (data as CreateTodoBody).status !== undefined
    )
}

// Achieving something similar using a more "mdoule" based approach
// const service = TodoService.getInstance()

// export const getList: (ctx: Context) => Promise<any> = async (_ctx) => {
//     return service.getList()
// }
