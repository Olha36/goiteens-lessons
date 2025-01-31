// const name = 'goIteens';
// const age = 15;
// const rate = 12;
// const surname = 'best company'

// const getData = (name2, age2, rate2) => {
//   return name2 + ' ' + age2 + ' ' + rate2;
// }

// console.log(getData(name, age, surname))

// const data = {
//   name: 'goIteens',
//   age: 15,
//   rate: 12,
//   getData() {
//     return this.name + ' ' + this.age + ' ' + this.rate;
//   }

// }
// console.log(data.getData());

//example 1
// const animal = {
//   legs: 4,
//   name: 'cat'
//  };
//  console.log(animal);

// //  const bird = {
// //   name: 'sparrow',
// //   tail: true
// //  }
//  const dog = Object.create(animal);
//  dog.name = "Манго";


//  console.log(dog); // { name: 'Манго', __proto__: animal }
//  console.log(animal.isPrototypeOf(dog)); // true


 //example 2
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.name); // 'Манго'

// console.log(dog.hasOwnProperty("legs")); // false
// console.log(dog.legs); // 4

//example 3
// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;
// for (const key in dog) {
//  console.log(key); // barks, eats
// }

//example 4
const animal = {
  eats: true,
 };
 const dog = Object.create(animal);
 dog.barks = true; 
 for (const value in animal) {
  if (!animal.hasOwnProperty(value)) continue;
  console.log(value); // barks
 }


//example 5
// class User {
//   // Синтаксис оголошення методу класу
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }
 
//  const mango = new User("Манго", "mango2@mail.com");
//  console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }
 
//  const poly = new User("Поли", "poly@mail.com");
//  console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }


//example 6
// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
 
//   // Метод getEmail
//   getEmail() {
//     return this.email;
//   }
 
//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
//  }

// const user1 = new User({ name: "John Doe", email: "john@example.com" });

// console.log("Email:", user1.getEmail());

// user1.changeEmail("john.doe@example.com");

// console.log("Updated Email:", user1.getEmail());


// example 7
// class User {
//   #email;
 
 
//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }
  
//   // Геттер email
//   get email() {
//     return this.#email;
//   }
  
//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
//  }

//  const user1 = new User({ name: "John Doe", email: "john@example.com" });

// console.log("Email:", user1.email);

// user1.email = "john.doe@example.com";

// console.log("Updated Email:", user1.email);

//example 8
// class User {
//   #email;
  
//   constructor(email) {
//     this.#email = email;
//   }
 
//    get email() {
//     return this.#email;
//   }
 
//    set email(newEmail) {
//     this.#email = newEmail;
//   }
//  }
  
//  class ContentEditor extends User {
//   // Тіло класу ContentEditor
//  }
  
//  const editor = new ContentEditor("mango@mail.com");
//  console.log(editor); // { email: "mango@mail.com" }
//  console.log(editor.email); // "mango@mail.com"

//example 9
// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }
  
//   addPost(post) {
//     this.posts.push(post);
//   }
//  }
  
//  const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
//  console.log(editor); // { email: 'mango@mail.com', posts: [] }
//  console.log(editor.email); // 'mango@mail.com'
//  editor.addPost("post-1");
//  console.log(editor.posts); // ['post-1']
