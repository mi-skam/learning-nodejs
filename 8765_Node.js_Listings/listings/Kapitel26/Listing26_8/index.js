let value = null;
let count = 0;
const callback = function () {
  if (count++ % 10 === 0) {
    const { rss, heapTotal, heapUsed } = process.memoryUsage();
    console.log(
      `RSS: ${rss}, Heap Total: ${heapTotal}, Heap Used: ${heapUsed}`,
    );
  }
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
