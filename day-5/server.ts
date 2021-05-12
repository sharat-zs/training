import App, { StandardError } from './framework'

const app = new App()

app.get('/hello', async () => 'world')
app.get('/error', async () => {
    throw new StandardError("Known error, won't fix", 'KNOWN_ERROR', 400)
})
app.start()
