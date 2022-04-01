const myObj = {
  myMethod() {
    setTimeout(function () {
      console.log(this); // Ausgabe: Timeout { ... }
    });
  },
};

myObj.myMethod();
