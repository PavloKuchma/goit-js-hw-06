const formInput = document.querySelector(".login-form");
const emailInput = document.querySelector("input[name='email']");
const passInput = document.querySelector("input[name='password']");
const submitBtn = document.querySelector("button[type='submit']");

submitBtn.addEventListener("click", submitFn);
function submitFn(event) {
  event.preventDefault();
  const emailFill = emailInput.currentTarget;
  const passFill = passInput.currentTarget;
  const userData = {
    useremail: "email",
    userpass: "password",
  };
  console.log(emailFill);
  console.log(passFill);

  if (emailFill.trim().length) {
    alert("All fields must be filled");
  }
}
