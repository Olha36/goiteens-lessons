const userData = [
    {
        name: "John Rolph",
        email: "john@example.com",
        age: 25,
    },

    {
        name: "Oleh",
        email: "oleh@example.com",
        age: 13,
    },

    {
        name: "Edward",
        email: "edward@example.com",
        age: 13,
    },

    {
        name: "Danya",
        email: "danya@example.com",
        age: 13,
    },

    {
        name: "Yura",
        email: "yura@example.com",
        age: 13,
    },

    {
        name: "Nazar",
        email: "nazar@example.com",
        age: 14
    }
];
let template = Handlebars.compile(document.querySelector('#address-template').innerHTML);
// execute the compiled template and print the ou
document.querySelector('#user-template').innerHTML = template(userData)