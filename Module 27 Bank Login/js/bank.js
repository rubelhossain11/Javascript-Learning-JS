document.getElementById("btn-button").addEventListener("click", function () {
  //   console.log("click button");
  const inputFieldEmail = document.getElementById("Email");
  const Email = inputFieldEmail.value;
  //   console.log("email done");
  const inputFieldPassword = document.getElementById("Password");
  const Password = inputFieldPassword.value;
  //   console.log("passsword done");
  if (Email === "mhr212864@gmail.com" && Password === "secret") {
    window.location.href = "index.html";
  } else {
    alert("Please enter your correct information than login now");
  }
});

/* document.getElementById("btn-button").addEventListener("click", function () {
  //   console.log("button clicked");
  const inputFieldEmail = document.getElementById("Email");
  //   console.log("Email done");
  const inputFieldPassword = document.getElementById("Password");
  // console.log('password done');

  if (Email === "mhr212864@gmail.com" && Password === "secret") {
    window.location.href = "index.html";
    // console.log("valid user");
  } else {
    alert("Please enter your correct information than login now");
  }
});
 */
