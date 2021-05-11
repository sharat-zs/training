export type Point<T = unknown> = {
    x: T,
    y: T,
    z: T
}

const p: Point = {
    x: 5.0,
    y: 5.0
}

let y = (p.x as number) + (p.y as number)


export default class HttpClient<T = unknown>{
    async get(): Promise<T> {
        return { name: 'harry' } as unknown as T
    }
}

const client = new HttpClient<Point<number>>()

function isPoint(data: unknown): data is Point {
    return typeof (data as Point).x === "number" && typeof (data as Point).y === "number" && typeof (data as Point).z === 'number'
}

client.get().then(data => {
    if (isPoint(data)) return data;
    else throw new Error('Response not valid')
}).catch(e => console.error(e))