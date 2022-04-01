class Person {
  #firstname = '';
  #lastname = '';

  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }

  greet() {
    return `Hello ${this.#firstname} ${this.#lastname}!`;
  }
}

const lisa = new Person('Lisa', 'Müller');
console.log(lisa.greet()); // Ausgabe: Hello Lisa Müller!
