const PubSub = function() {

  const Subscriber = {};

  const subscribe = function(eventName, cb) {

    if (!Array.isArray(Subscriber[eventName])) {
      Subscriber[eventName] = []
    }
    Subscriber[eventName].push(cb); //subsciber subscribes to events and store callbacks in array.
    return {
      unsubscribe() { //unsubscribe
        Subscriber[eventName] = Subscriber[eventName].filter(item => item != cb);
      }
    }
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


const result = pubsub.subscribe('consoleData', function(data) {
  console.log("Subscribed", data);
})

const result2 = pubsub.subscribe('consoleData', function(data) {
  console.log("Subscribed 2", data);
})



pubsub.publish('consoleData', 'This is the data published');
result.unsubscribe()
result2.unsubscribe()
pubsub.publish('consoleData', 'This is the data published 2'); // this data is not consoled as we have unsubscribed both the results.
