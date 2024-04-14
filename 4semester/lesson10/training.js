
  let num = 0;


let interval = setInterval(() => {
  num += 1;
  console.log(num);

  if(num >= 10) {
    clearInterval(interval)
  }
  document.write(num + '<br>')
}, 1000)


