const userData = {
    name: "John Rolph",
    email: "john@example.com",
    age: 40,
    greetings: "hello"
};
const userTemplate = Handlebars.compile(document.querySelector('#address-template').innerHTML);
document.querySelector('#user-template').innerHTML = userTemplate(userData);
