const formElement = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };
const LS_KEY = 'feedback-form-state';

formElement.addEventListener('input', onDataform);
document.addEventListener('DOMContentLoaded', renderPage);
formElement.addEventListener('submit', onSubForm);

function onDataform(event) {
  const form = new FormData(formElement);

  formData.email = form.get('email').trim();
  formData.message = form.get('message').trim();

  const json = JSON.stringify(formData);
  localStorage.setItem(LS_KEY, json);
}

function renderPage() {
  const lsData = localStorage.getItem(LS_KEY);
  const result = JSON.parse(lsData);

  try {
    formElement.elements.email.value = result.email;
    formElement.elements.message.value = result.message;
  } catch (error) {
    console.log(error);
  }
}

function onSubForm(event) {
  event.preventDefault();
  const newForm = new FormData(formElement);

  formData.email = newForm.get('email').trim();
  formData.message = newForm.get('message').trim();

  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  }

  console.log(formData);

  localStorage.removeItem(LS_KEY);
  event.target.reset();
}
