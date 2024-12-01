import { EventEmitter} from 'events'

const myEmitter = new EventEmitter()

function greet (name) {
   console.log(`hello ${name}`)
}

function goodbye (name) {
    console.log(`goodbye ${name}`)
 }

 myEmitter.on('greet' , greet)
 myEmitter.on('salam' , goodbye)

 myEmitter.emit('greet' , "said")
 myEmitter.emit('salam' , "amine")