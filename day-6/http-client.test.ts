import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import { fetchData, URL } from './http-client'

// jest.mock('axios')
// const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxios = new AxiosMockAdapter(axios)
mockedAxios.onGet(URL).reply(200, {
    users: [{ id: 1, name: 'John Smith' }]
})

describe('http-client', () => {
    it('should return proper response', async () => {
        const { status, data } = await fetchData(URL)
        expect(status).toBe(200)
        expect(data).toMatchSnapshot()
    })
})
