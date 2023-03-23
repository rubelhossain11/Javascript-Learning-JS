const petOwner = {
  name: "Jolonto Kolil",
  contact: {
    phone: "0912435",
    email: "abul@gmail.com",
  },
  pet: {
    name: "Lofie",
    info: {
      color: "block",
      weight: "1.2 kg",
    },
  },
};
// console.log(petOwner.pet.name);
console.log(petOwner?.dog?.name);
