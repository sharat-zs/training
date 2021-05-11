function dummy(name: string, place: string): number {
    return 5
}

function dummyVoid(name: string, place: string): void {
}

const arrowDummy = (name: string, place: string): number => {
    return 5
}

type DummyFunc = (name: string) => number

const anotherDummy: DummyFunc = (name) => {
    return 5
}