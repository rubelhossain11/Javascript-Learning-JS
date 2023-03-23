// function declaration

function add(first, second) {
  const total = first + second;
  return total;
}
// const result = add(10, 20);
// console.log(result);

// function expression
const add1 = function add1(first, second) {
  const total = first + second;
  return total;
};

// function expression with anonymouse function
const add2 = function (first, second) {
  const total = first + second;
  return total;
};

function add4(first, second) {
  return first + second;
}

// short cut function
const add6 = (first, second) => first + second;
const result = add(30 , 20);
console.log(result);
