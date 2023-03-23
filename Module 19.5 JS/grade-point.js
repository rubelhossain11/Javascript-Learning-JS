// 100-80=A+
// 70-79=A
// 60-69=A-
// 50-59=B
// 40-49=C
// 33-39=D
// 0-32=F
var result = 45;
if (result > 100) {
  console.log("Bhai number 100 take besi kemne hoy");
} else if (result <= 100 && result >= 80) {
  console.log("A+");
} else if (result <= 79 && result >= 70) {
  console.log("A");
} else if (result <= 69 && result >= 60) {
  console.log("A-");
} else if (result <= 59 && result >= 50) {
  console.log("B");
} else if (result <= 49 && result >= 40) {
  console.log("C");
} else if (result <= 39 && result >= 33) {
  console.log("D");
} else if (result < 0) {
  console.log("Bhai number 0 take kom kemne hoy");
} else {
  console.log(F);
}
