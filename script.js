const sumbitBtn = document.querySelector('#submit-button')
const passwordInput = document.querySelector('#password-input');
const passwordConfirmInput = document.querySelector('#password-confirm-input');
const passwordSpan = document.querySelector('#invalid-password-span');


sumbitBtn.addEventListener('click', () => {
    if (passwordInput.value !== passwordConfirmInput.value) {
        passwordSpan.removeAttribute('hidden')
    } else {
        passwordSpan.setAttribute('hidden', true);        
    }
});
