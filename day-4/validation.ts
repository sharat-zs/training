import * as z from 'zod'

const nameSchema = z.string()
type A = z.infer<typeof nameSchema>;


const PointSchema = z.object({ x: z.number().max(90), y: z.number().max(90), z: z.number() })
type Point = z.infer<typeof PointSchema>


export default class HttpClient<T = unknown>{
    async get(): Promise<T> {
        return { x: 95, y: 100 } as unknown as T
    }
}

function isPoint(data: unknown): data is Point {
    try {
        PointSchema.parse(data)
        return true
    }
    catch (err) {
        console.error(err)
        return false
    }
}

const client = new HttpClient<Point>()

client.get().then(data => {
    if (isPoint(data)) return data;
    else throw new Error('Response not valid')
}).catch(e => console.error(e))