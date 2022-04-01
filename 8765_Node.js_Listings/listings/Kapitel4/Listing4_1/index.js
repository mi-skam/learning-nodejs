// Laden des gesamten Moduls
const os = require('os');
console.log(os.uptime());

// Laden des Moduls und Extraktion bestimmter Funktionen per Destructuring
const { uptime } = require('os');
console.log(uptime());
