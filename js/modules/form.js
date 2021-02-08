function formItem() {
  const form = document.querySelector('.newsletter');
  const email = document.getElementById('email');
  const error = document.querySelector('.error');
  form.setAttribute('novalidate', true);
  form.addEventListener('submit', (e) => {
    const noEmail = email.validity.valueMissing;
    const wrongEmail = email.validity.typeMismatch;
    if (noEmail) {
      e.preventDefault();
      error.innerHTML = `Please enter your email address`;
      email.focus();
    }
    if (wrongEmail) {
      e.preventDefault();
      error.innerHTML = `Please enter a valid email`;
      email.focus();
    }
  });
}

export { formItem };
