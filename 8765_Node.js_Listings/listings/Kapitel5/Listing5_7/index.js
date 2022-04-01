const myObj = {
  myMethod() {
    setTimeout(() => {
      console.log(this); // Ausgabe: { myMethod: [Function: myMethod] }
    });
  },
};

myObj.myMethod();
