// Function Which takes function as argument and return a function which will retrn Counter Object

function higherorder(Count) {
  let count = 0;

  const increment = function () {
    ++this.count;
  };

  const decrement = function () {
    --this.count;
  };

  return () => {
    return new Count(count, increment, decrement);
  };
}

function Count(count, inc, dec) {
  this.count = count;
  this.inc = inc.bind(this);
  this.dec = dec.bind(this);
}

const buildCounter = higherorder(Count);
const counter1 = buildCounter();
const counter2 = buildCounter();
counter1.inc();
counter1.inc();
console.log(counter1.count);
counter2.inc();
counter2.inc();
console.log(counter2.count);
