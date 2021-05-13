import { Server } from 'http'
import supertest from 'supertest'
import app from './server'

describe('integration tests', () => {
    let server: Server
    let agent: supertest.SuperTest<supertest.Test>
    expect.hasAssertions()

    beforeAll(async () => {
        server = await app
        agent = supertest(server)
    })

    afterAll(() => {
        server.unref()
        server.close()
    })

    it('should send 200 response to "/hello"', async () => {
        const res = agent.get('/hello')
        expect((await res).status).toBe(200)
        expect((await res).body).toMatchSnapshot()
    })

    it('should always throw error', async () => {
        const res = agent.get('/error')
        expect((await res).status).toBe(400)
        expect((await res).body).toMatchSnapshot()
    })
})
