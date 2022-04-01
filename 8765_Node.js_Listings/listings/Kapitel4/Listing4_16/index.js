const textEncoder = new TextEncoder();
const encodedString = textEncoder.encode('Hello World');
console.log(encodedString); // Ausgabe: Uint8Array(11) [72,101,108,108,111,32,87,111,114,108,100]

const textDecoder = new TextDecoder();
const decodedString = textDecoder.decode(encodedString);
console.log(decodedString); // Ausgabe: Hello World
