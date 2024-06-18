// Получаем все отзывы и обертку для отзывов
const reviews = document.querySelectorAll('.review');
const container = document.getElementById('container');

// Индекс текущей страницы (начинаем с 0)
let currentPage = 0;

// Определяем количество отзывов на странице в зависимости от ширины экрана
let reviewsPerPage = window.innerWidth <= 973 ? 1 : 2;

// Функция для отображения отзывов на текущей странице
function showReviews() {
  // Скрываем все отзывы
  reviews.forEach(review => {
    review.style.display = 'none';
  });

  // Определяем начальный и конечный индекс для текущей страницы
  const startIndex = currentPage * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;

  // Отображаем отзывы для текущей страницы
  for (let i = startIndex; i < endIndex; i++) {
    if (reviews[i]) {
      reviews[i].style.display = 'block';
    }
  }
}

// Показываем отзывы для начальной страницы
showReviews();

// Функция для обновления состояния при изменении ширины экрана
function updateReviewsPerPage() {
  if (window.innerWidth <= 973) {
    reviewsPerPage = 1;
  } else {
    reviewsPerPage = 2;
  }

  // Обновляем текущую страницу если она выходит за пределы допустимых страниц
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  if (currentPage >= totalPages) {
    currentPage = totalPages - 1;
  }

  // Обновляем отображение отзывов
  showReviews();
}

// Обработчик для кнопки "Предыдущая страница"
document.getElementById('prevBtn').addEventListener('click', function() {
  if (currentPage > 0) {
    currentPage--;
    showReviews();
  }
});

// Обработчик для кнопки "Следующая страница"
document.getElementById('nextBtn').addEventListener('click', function() {
  if (currentPage < Math.ceil(reviews.length / reviewsPerPage) - 1) {
    currentPage++;
    showReviews();
  }
});

// Добавляем слушатель для изменения ширины окна
window.addEventListener('resize', updateReviewsPerPage);

// Начальная проверка ширины экрана
updateReviewsPerPage();
