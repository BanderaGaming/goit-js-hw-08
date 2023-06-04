import throttle from 'lodash.throttle';

const storageKey = "feedback-form-state";
const form = document.querySelector("form");
const emailInput = document.querySelector("input");
const messageInput = document.querySelector("textarea");
const localValues = localStorage.getItem(storageKey);

const makeObject = () => {
    const markup = {
        email: emailInput.value,
        message: messageInput.value,
    };
    return markup;
};

const saveValues = () => {
    localStorage.setItem(storageKey, JSON.stringify(makeObject()));
};

const setValues = () => {
if (localValues === null) {
    return;
}
    try {
        const parsedValues = JSON.parse(localValues);
        emailInput.value = parsedValues.email;
        messageInput.value = parsedValues.message;
    } catch (error) {
        console.error(error.message);
    }
};

const onSubmit = (event) => {
    event.preventDefault();
    console.log(makeObject());
    localStorage.clear();
    form.reset();

};
    

form.addEventListener("input",throttle(saveValues,500));
form.addEventListener("submit", onSubmit);
setValues();
