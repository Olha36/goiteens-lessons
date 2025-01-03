console.log('exercise');

function prepareOrder(pizza) {
  return new Promise((resolve) => {
    console.log(`починаємо готувати ${pizza}: розкатуємо тісто, додаємо начинку, випікаємо`);
    setTimeout(() => {
      resolve(`${pizza}` + ' готова');
    }, 5000);
  });
}

async function handleOrder() {
  console.log('Приймаємо замовлення від клієнта'); // записуємо яку піцу з якими складниками клієнт хоче

  await prepareOrder('Гавайська, пепероні');
  console.log('Замовленння готове. Заберіть будь ласка');
}
handleOrder();
