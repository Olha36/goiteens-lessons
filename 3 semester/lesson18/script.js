// const name = 'goIteens';
// const age = 15;
// const rate = 12;
// const surname = 'best company'

// const getData = (name2, age2, rate2) => {
//   return name2 + ' ' + age2 + ' ' + rate2;
// }

// console.log(getData(name, age, surname))

const data = {
  name: 'goIteens',
  age: 15,
  rate: 12,
  getData() {
    return this.name + ' ' + this.age + ' ' + this.rate;
  }

}
console.log(data.getData());