// https://www.typescriptlang.org/docs/handbook/utility-types.html
export type Point = {
    x: number,
    y: number
}

type OptionalPoint = Partial<Point>

function mergeConfig(envConfig: Partial<Point>): Point {
    return {
        x: 10,
        y: 10,
        ...envConfig
    }
}

console.log(mergeConfig({ x: 100 }))
console.log(mergeConfig({}))

console.log(mergeConfig({ x: 100, y: 200 }))

type Todo = {
    title: string,
    description: string,
    completed: boolean
}

type TodoPreview = Pick<Todo, "title" | "completed">

type Omitted = Omit<Todo, 'title'>