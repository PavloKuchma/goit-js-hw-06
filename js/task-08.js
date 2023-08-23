const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", submitFn);
function submitFn(event) {
  event.preventDefault();
  const emailFill = formRef.elements.email.value;
  const passFill = formRef.elements.password.value;

  if (emailFill.length === 0 || passFill.length === 0) {
    alert("All fields must be filled");
  }
  const userData = {
    useremail: emailFill,
    userpass: passFill,
  };
  console.log(userData);
  formRef.reset();
}
