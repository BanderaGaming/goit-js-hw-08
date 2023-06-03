import throttle from 'lodash.throttle';

const storageKey = "feedback-form-state";
const form = document.querySelector("form");
const emailInput = document.querySelector("input");
const messageInput = document.querySelector("textarea");

const saveValues = () => {
    const markup = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem(storageKey, JSON.stringify(markup));
};

    const a = () => {
        try {
            JSON.parse(storageKey)
        } catch (error) {
            console.error(error.message);
            console.error(error.name);
        }
    }


form.addEventListener("input", saveValues)
a()
