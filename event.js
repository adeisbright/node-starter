//! Working with the events in Javascript  
/**
 * Event emitters are objects in Node.js that trigger an event by sending a message to signal that 
 * an action was completed. JavaScript developers can write code that listens to events from an event
 * emitter, allowing them to execute functions every time those events are triggered. In this context,
 * events are composed of an identifying string and any data that needs to be passed to the listeners.
 * Typically in Node.js, when we want to have an action occur upon completion of another action, 
 * we use asynchronous programming techniques like nesting callbacks or chaining promises.
 * However, these techniques tightly couple the triggering action and the resulting action, 
 * making it difficult to modify the resulting action in the future. 
 * Event emitters provide a different way to structure this relationship: the publish-subscribe pattern. 
 * In this software architecture pattern, a publisher (the event emitter) sends a message (an event), 
 * and a subscriber receives the event and performs an action. 
 * The power of this pattern is that the publisher does not need to know about the subscribers.
 * A publisher publishes a message, and it’s up to the subscribers to react to it in their respective ways. 
 * If we wanted to change the behavior of our application,
 * we could adjust how the subscribers react to the events without having to change the publisher.
 */
const { EventEmitter }  = require('events')

const emitter = new EventEmitter() 

function sayHi(name) {
	console.log(name) 
	//! emitter.removeListener('foo' , sayHi)
}
// Node js allows us to add a listenter to an event using the on fuction
emitter.on('barz'  , sayHi) //!emitter.once will make the event to run only once 
emitter.emit("My first event") // This event is emitted but nothing acts on it because an event expects a handler
function invoke() {
	emitter.emit('foo' , sayHi('Adeleke'))
}
invoke()