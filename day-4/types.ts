type StringOrNum = string | number

export let x: StringOrNum = 5
x = 'abc'

// @ts-expect-error
x = false

type Point2D = {
    x: number
    y: number
}

type PointAlias = {
    x: number,
    y: number
}

type Point3D = Point2D & {
    z: number
}

type Maybe3D = Point3D | Point2D

let p: Maybe3D = { x: 12, y: 12 }
let o: Maybe3D = { x: 12, y: 12, z: 100 }

let g: Point3D = { x: 12, y: 12, z: 30 }

let pointAlias: PointAlias = { x: 12, y: 12 }

interface IPointInterface {
    x: number
    y: number
}

interface IPoint3DInterface extends IPointInterface {
    z: number
}

let y: IPointInterface = {
    x: 10,
    y: 10
}

function getDistance(point: { x: number, y: number }) {
    return 10
}

function getDistanceFromCenter(point: Point2D | Point3D): number {
    if (is3D(point))
        return Math.sqrt(point.x * point.x + point.y * point.y + point.z * point.z)
    return Math.sqrt(point.x * point.x + point.y * point.y)
}

//type guard
function is3D(point: Point2D | Point3D): point is Point3D {
    return (point as Point3D).z !== undefined
}



