import axios from 'axios'
import { fetchData, URL } from '../day-6/http-client'
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

app.get('/outgoing', async () => fetchData(URL))

app.get('/todos', TodoController.getInstance().getList)
app.post('/todos', TodoController.getInstance().createItem)

app.get('/upstream', async () => {
    const res = await axios.get('http://upstream:8080')
    return res.data
})

export default app.start()
