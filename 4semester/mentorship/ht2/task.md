Створіть слайдер на сторінці, який показує зображення. При переміщенні слайдера виконуйте деякі дії, наприклад, змінюйте розмір зображення. Використайте debounce для того, щоб ці дії виконувалися не занадто часто при швидкому переміщенні слайдера.

<div class="slider">
  <input type="range" min="1" max="100" value="50" class="slider__input">
  <img src="https://via.placeholder.com/300x300" class="slider__image">
</div>

.slider {
  max-width: 400px;
  margin: 0 auto;
}

.slider__input {
  width: 100%;
}

.slider__image {
  display: block;
  margin: 20px auto;
  max-width: 100%
}
