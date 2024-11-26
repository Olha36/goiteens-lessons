// fetch('https://jsonplaceholder.typicode.com/todos/9')
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error)
//   )

// const url = `https://stephen-king-api.onrender.com/api/books`;
// fetch(url, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     }
   
// })
// .then((response) => response.json())
// .then((todo) => console.log(todo))
// .catch((error) => console.log(error))


const quotes = `https://jsonplaceholder.typicode.com/todos/9`

const update = {
    quote: 'This is a test quote',
    author: 'goIteens',
    category: 'test'
}

fetch(quotes, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        // 'X-Api-Key': '+N8VDmi3IPpD6ygKcZzhoA==cD7b1gv1GcElTiR6',
    },
    
    body: JSON.stringify(update)
})
.then((response) => response.json())
.then((quotes) => console.log(quotes))
.catch((error) => console.log(error))