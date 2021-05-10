/* eslint-disable import/no-extraneous-dependencies */
const supertest = require('supertest')
const start = require('./server')

describe('server', () => {
    let server
    let agent
    beforeAll(() => {
        server = start()
        agent = supertest(server)
    })

    afterAll(() => {
        server.unref()
        server.close()
    })

    it('should respond with 200', async () => {
        const response = await agent.get('/hello')
        expect(response.status).toBe(200)
    })
})
