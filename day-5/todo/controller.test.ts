import {
    createMockContext,
    MockTodoService,
    MOCK_TODO_ARRAY
} from './test-utils'
import { Controller } from './controller'

describe('TodoController', () => {
    const mockService = new MockTodoService()

    describe('getList', () => {
        it('should call service', async () => {
            mockService.getList.mockResolvedValueOnce(MOCK_TODO_ARRAY)
            const controller = new Controller(mockService)
            const res = await controller.getList(createMockContext())
            expect(mockService.getList).toHaveBeenCalledTimes(1)
            expect(res).toMatchSnapshot()
        })
    })
})
