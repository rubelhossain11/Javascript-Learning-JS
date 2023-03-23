const person = {
  name: "abul",
  age: 34,
  contact: {
    phone: "0912435",
    email: "abul@gmail.com",
  },
  education: {
    schoolName: "monati high school",
    subjects: [
      { name: "bangla", mark: 64 },
      { name: "englis", mark: 43 },
      { name: "chemistry", mark: 76 },
    ],
  },
};
console.log(person.education.subjects[2].mark);
// const age = person.age;
// const age = person["age"];
// const property = "age";
// const age = person[property];
// console.log(age);
