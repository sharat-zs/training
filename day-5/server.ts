import App, { StandardError } from './framework'
import { TodoController } from './todo'

const app = new App()

app.get('/hello', async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('hello'), 200)
    })
})
app.get('/error', async () => {
    throw new StandardError("Known error, won't fix", 'KNOWN_ERROR', 400)
})

app.get('/todos', TodoController.getInstance().getList)
app.post('/todos', TodoController.getInstance().createItem)

export default app.start()
