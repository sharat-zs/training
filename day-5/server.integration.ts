import { Server } from 'http'
import supertest from 'supertest'
import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import app from './server'
import { URL } from '../day-6/http-client'

// jest.mock('axios')
// const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxios = new AxiosMockAdapter(axios)
mockedAxios.onGet(URL).reply(200, {
    users: [{ id: 1, name: 'John Smith' }]
})

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

    it('should return 200 on outbound', async () => {
        const res = agent.get('/outgoing')
        expect((await res).status).toBe(200)
        expect((await res).body.data).toMatchSnapshot()
    })
})
