enum Direction {
    Left = 0,
    Botttom,
    Right,
    Up
}

function echoDirection(dir: Direction): Direction {
    return dir
}

echoDirection(Direction.Up)

enum DirectionStr {
    Left = 'left',
    Botttom = 'bottom',
    Right = 'right',
    Up = 'up'
}