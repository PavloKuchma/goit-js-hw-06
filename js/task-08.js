const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", submitFn);
function submitFn(event) {
  event.preventDefault();
  const emailFill = formRef.elements.email.value;
  const passFill = formRef.elements.password.value;

  if (emailFill.trim().length === 0 || passFill.trim().length === 0) {
    alert("All fields must be filled");
  } else {
    const userData = {
      useremail: emailFill,
      userpass: passFill,
    };
    console.log(userData);
    formRef.reset();
  }
}
