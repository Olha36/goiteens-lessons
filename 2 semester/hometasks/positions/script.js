const portfolio = document.querySelector('.portfolio');
console.log(portfolio);

const test = document.querySelector('.test');
console.log(test);

const testText = document.querySelector('.test-text');
console.log(testText);

portfolio.addEventListener('click', function() {
    test.classList.add('active');
})

testText.addEventListener('click', function() {
    test.classList.remove('active');
})