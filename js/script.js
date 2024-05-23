// Получаем все отзывы и обертку для отзывов
const reviews = document.querySelectorAll('.review');
const container = document.getElementById('container');

// Индекс текущей страницы (начинаем с 0)
let currentPage = 0;

// Функция для отображения отзывов на текущей странице
function showReviews() {
  // Скрываем все отзывы
  reviews.forEach(review => {
    review.style.display = 'none';
  });

  // Отображаем отзывы для текущей страницы
  const startIndex = currentPage * 2;
  const endIndex = startIndex + 2;
  for (let i = startIndex; i < endIndex; i++) {
    if (reviews[i]) {
      reviews[i].style.display = 'block';
    }
  }
}

// Показываем отзывы для начальной страницы
showReviews();

// Обработчик для кнопки "Предыдущая страница"
document.getElementById('prevBtn').addEventListener('click', function() {
  if (currentPage > 0) {
    currentPage--;
    showReviews();
  }
});

// Обработчик для кнопки "Следующая страница"
document.getElementById('nextBtn').addEventListener('click', function() {
  if (currentPage < Math.ceil(reviews.length / 2) - 1) {
    currentPage++;
    showReviews();
  }
});
