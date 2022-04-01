let value = null;
const callback = function () {
  const originalValue = value;
  function doSomething() {
    if (originalValue) return true;
  }
  value = {
    data: new Array(1000000).fill('xxx'),
    getSize() {
      return data.length;
    },
  };
};
setInterval(callback, 100);
