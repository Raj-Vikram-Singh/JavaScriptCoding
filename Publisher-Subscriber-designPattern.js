/* publisher subscriber patter */

const PubSub = function() {

  const Subscriber = {};

  const subscribe = function(eventName, cb) {

    if (!Array.isArray(Subscriber[eventName])) {
      Subscriber[eventName] = []
    }
    Subscriber[eventName].push(cb); //subsciber subscribes to events and store callbacks in array.
  }

  const publish = function(eventName, data) {

    if (!Array.isArray(Subscriber[eventName])) {
      return
    }
    Subscriber[eventName].forEach(event => event(data)); //publish calls all the cb subscribed to that event.
  }

  return {
    publish,
    subscribe
  }
}


const pubsub = PubSub();

pubsub.subscribe("firstEvent", function(data) {
	console.log(`this is the ${data} event`)
});

pubsub.publish("firstEvent", "first"); // consoles => "this is the first event"
