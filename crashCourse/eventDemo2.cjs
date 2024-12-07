const events = require("events")

const eventEmitter = new events.EventEmitter()

const eventHandler = (name) => {
    console.log('i hear scream ? that you ' + name );
}

eventEmitter.on('scream' , eventHandler)

eventEmitter.emit('scream' , 'titou')