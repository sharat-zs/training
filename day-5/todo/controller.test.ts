import {
    createMockContext,
    MockTodoService,
    MOCK_TODO_ARRAY
} from './test-utils'
import { Controller } from './controller'
import { TodoStatus } from './types'

describe('TodoController', () => {
    const mockService = new MockTodoService()

    describe('getList', () => {
        it('should call service getList', async () => {
            mockService.getList.mockResolvedValueOnce(MOCK_TODO_ARRAY)
            const controller = new Controller(mockService)
            const res = await controller.getList(createMockContext())
            expect(mockService.getList).toHaveBeenCalledTimes(1)
            expect(res).toMatchSnapshot()
        })
    })

    describe('create item', () => {
        it('should reject invalid context', async () => {
            mockService.createItem.mockResolvedValueOnce(MOCK_TODO_ARRAY[0])
            const controller = new Controller(mockService)
            expect(
                controller.createItem(createMockContext())
            ).rejects.toMatchSnapshot()
            expect(mockService.createItem).not.toHaveBeenCalled()
        })

        it('should return created todoitem', async () => {
            mockService.createItem.mockResolvedValueOnce(MOCK_TODO_ARRAY[0])
            const controller = new Controller(mockService)
            const res = await controller.createItem(
                createMockContext({
                    body: { title: 'mock title', status: TodoStatus.Pending }
                })
            )
            expect(mockService.createItem).toHaveBeenCalledTimes(1)
            expect(res).toMatchSnapshot()
        })
    })

    describe('singleton test', () => {
        expect(Controller.getInstance()).toStrictEqual(Controller.getInstance())
    })
})
