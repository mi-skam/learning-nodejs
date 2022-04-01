const target = new EventTarget();

target.addEventListener('customEvent', (event) => {
  console.log(`${event.type} wurde ausgelöst`); // Ausgabe: customEvent wurde ausgelöst
});

const event = new Event('customEvent');

target.dispatchEvent(event);
