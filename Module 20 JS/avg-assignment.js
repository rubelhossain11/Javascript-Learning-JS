function add(Assignment1, Assignment2, Assignment3) {
  const total = Assignment1 + Assignment2 + Assignment3;
  const getAvg = total / 3;
  return getAvg;
}
const Assignment1 = 60;
const Assignment2 = 50;
const Assignment3 = 60;
const myAvg = add(Assignment1, Assignment2, Assignment3);
const myAvgMarks = myAvg.toFixed(2);
console.log("my three assignment marks avg:", myAvgMarks);
