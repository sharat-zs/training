import { Context } from '../framework'

export enum TodoStatus {
    Pending = 'pending',
    InProgress = 'in-progress',
    Done = 'done'
}

export type TodoItem = {
    id: number
    title: string
    status: TodoStatus
}

export type CreateTodoBody = Omit<TodoItem, 'id'>

export interface ITodoController {
    getList: (ctx: Context) => Promise<TodoItem[]>
    createItem: (ctx: Context) => Promise<TodoItem>
}

export interface ITodoService {
    getList: () => Promise<TodoItem[]>
    createItem: (data: CreateTodoBody) => Promise<TodoItem>
}
