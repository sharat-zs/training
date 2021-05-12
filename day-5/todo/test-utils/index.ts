import { Context } from '../../framework'
import { ITodoService, TodoItem, TodoStatus } from '../types'

export const MOCK_TODO_ARRAY: TodoItem[] = [
    { id: 1, title: 'task -1', status: TodoStatus.Pending }
]

export class MockTodoService implements ITodoService {
    getList = jest.fn()

    createItem = jest.fn()
}

export function createMockContext(ctx: Partial<Context> = {}): Context {
    return {
        path: '/todos',
        ...ctx
    }
}
