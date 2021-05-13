import axios from 'axios'

export const URL = 'https://jsonplaceholder.typicode.com/todos/1'
export async function fetchData(url: string) {
    const res = await axios.get(url)
    const data = res.data
    const status = res.status
    return { data, status }
}

// fetchData(URL).then((res) => console.log(res))
