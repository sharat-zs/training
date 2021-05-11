function dummy(name: string, place: string = 'bangalore'): number {
    return 5
}

function dummyVoid(name: string, place?: string): void {
}

const arrowDummy = (name: string, place: string): number => {
    return 5
}

type DummyFunc = (name: string) => number

const anotherDummy: DummyFunc = (name) => {
    return 5
}

dummy('harry', 'delhi')

dummyVoid('harry')

type Person =
    { name: string, email: string, place?: string }

function savePersonDetails(person: Person) {

}
