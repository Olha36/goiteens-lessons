const data = {
  "students": [
    {
      "id": 1,
      "name": "John Doe",
      "age": 20,
      "email": "john.doe@example.com",
      "phone": "555-1234"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "age": 21,
      "email": "jane.smith@example.com",
      "phone": "555-5678"
    },
    {
      "id": 3,
      "name": "Bob Johnson",
      "age": 19,
      "email": "bob.johnson@example.com",
      "phone": "555-9012"
    }
  ]
}

fetch(data, {
  method: "GET"
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log("ERROR", error))