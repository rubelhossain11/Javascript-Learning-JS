/* 
1.show the output from :1-50
2.if the number is divisible by 3 then instend of the number show 'foo'
3.if the number is divisible by 5 then instend of the number show 'bar'
4.if the number is divisible by 3 and 5 then instend of the number show 'foobar'
*/
const number = 50;
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("foobar");
  } else if (i % 3 === 0) {
    console.log("foo");
  } else if (i % 5 === 0) {
    console.log("bar");
  } else {
    console.log(i);
  }
}
