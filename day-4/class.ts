export class Point implements IPoint {
    constructor(public readonly x: number, protected y: number, private z: number) {
    }

    getLocation() {
        return [this.x, this.y, this.z] as [number, number, number]
    }
}


const p = new Point(10, 100, 1000)
console.log(p.x)
console.log(p.y)
console.log(p.z)

interface IPoint {
    x: number
    getLocation: () => [number, number, number]
}

type Arr = number[]
type Tup = [number]

const x: [number, number] = [1, 2]

class BigPoint extends Point {
    constructor(x: number, y: number, z: number) {
        super(x, y, z)
    }

    getArea() {
        return this.y
    }
}

class Circle {
    constructor(center: IPoint, radius: number) { }
}

new Circle(p, 10)

