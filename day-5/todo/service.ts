import { CreateTodoBody, ITodoService, TodoItem } from './types'

export class TodoService implements ITodoService {
    static instance: TodoService

    static getInstance() {
        if (this.instance === undefined) this.instance = new TodoService([])
        return this.instance
    }

    constructor(private readonly todos: TodoItem[]) {}

    getList: () => Promise<TodoItem[]> = async () => {
        return this.todos.map((item) => item)
    }

    createItem: (data: CreateTodoBody) => Promise<TodoItem> = async (data) => {
        const item = {
            id: Math.ceil(Math.random() * 10000),
            ...data
        }
        this.todos.push(item)
        return item
    }
}
