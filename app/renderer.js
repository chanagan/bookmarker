const linksSection = document.querySelector('.links');
const errorMessage = document.querySelector('.error-message');
const newLinkForm = document.querySelector('.new-link-form');
const newLinkUrl = document.querySelector('.new-link-url');
const newLinkSubmit = document.querySelector('.new-link-submit');
const clearStorageButton = document.querySelector('.clear-storage');

const button = document.querySelector('.alert');

const clearForm= () => {
    newLinkUrl.value = null;
};

button.addEventListener('click', () => {
    alert(__dirname)
});

newLinkUrl.addEventListener('keyup', () => {
    newLinkSubmit.disabled = !newLinkUrl.validity.valid;
});
newLinkForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const  url = newLinkUrl.value;
});
