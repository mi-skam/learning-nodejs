const url = new URL('/dist/latest-v16.x/docs/api/', 'https://nodejs.org');

console.log(url.href); // Ausgabe: https://nodejs.org/dist/latest-v16.x/docs/api/

const searchParams = new URLSearchParams();
searchParams.set('name', 'john');
searchParams.set('age', 42);
console.log(searchParams.toString()); // Ausgabe: name=john&age=42
