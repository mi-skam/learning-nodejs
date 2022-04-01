class User {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    return `Hello ${this.firstname} ${this.lastname}`;
  }
}
