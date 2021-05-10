const EventEmitter = require('events')

const emitter = new EventEmitter()
const listener = () => console.log('emit event occured')
emitter.on('init', listener)
emitter.off('init', listener)

function asyncFunc() {
    setTimeout(() => emitter.emit('init'), 1000)
}
asyncFunc()
