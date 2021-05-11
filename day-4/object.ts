type Point = {
    x: number,
    y: number,
    nest?: {
        length: number
    }
}

const p: Point = {
    x: 5,
    y: 6,
    nest: {
        length: 100
    }
}

console.log(p.nest?.length)


