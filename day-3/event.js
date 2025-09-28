const EventEmitter = require("events")

const emitter = new EventEmitter();

//Key methods
//* on(eventName,Listener) --- create

emitter.on("GREET", (args) => {
    console.log(`Hello coder , i am ${args.username} with ID: ${args.id}`)
})

//* emit(eventName, [args]) --- execute

emitter.emit("GREET", {
    username:"Rahul Belwal",
    id:"1adgsdf"
})