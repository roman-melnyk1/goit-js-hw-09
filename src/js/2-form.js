const formData = {
  email: "",
  message: "",
};


const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');


function saveToLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('input', (event) => {

  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  } else if (event.target.name === 'message') {
    formData.message = event.target.value.trim();
  }

  saveToLocalStorage();
});

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);

    emailInput.value = parsedData.email;
    messageInput.value = parsedData.message;
    formData.email = parsedData.email;
    formData.message = parsedData.message;
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData.email = "";
  formData.message = "";
  emailInput.value = "";
  messageInput.value = "";
});