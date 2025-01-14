const reviews = [
    {
        title: "Все в восторге",
        text: "Спасибо, тортики оказались очень вкусными, особенно, прага. Будем с нетерпением ждать новых шедевров.",
        author: "Валерия Артемова",
        location: "г. Тула",
        image: "/img/review-photo.svg"
    },
    {
        title: "Превосходно!",
        text: "Торты просто великолепны! Каждый раз, когда заказываем, остаемся довольны.",
        author: "Мария Петрова",
        location: "г. Москва",
        image: "/img/review-photo2.svg"
    },
    {
        title: "Лучшие сладости!",
        text: "Я в восторге от качества и вкуса! Рекомендую всем!",
        author: "Никита Иванов",
        location: "г. Калуга",
        image: "/img/review-photo3.svg"
    }
];

let currentReviewIndex = 0;

const reviewBlock = document.querySelector('.review-block');
const title = reviewBlock.querySelector('h2');
const text = reviewBlock.querySelector('p');
const author = reviewBlock.querySelector('.image-container h3');
const reviewLocation = reviewBlock.querySelector('.image-container p');
const image = reviewBlock.querySelector('.image-container img');

document.querySelector('.review-btn').addEventListener('click', () => {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    const review = reviews[currentReviewIndex];

    // Анимация уезжающего отзыва
    reviewBlock.classList.add('slide-out');
    setTimeout(() => {
        title.textContent = review.title;
        text.innerHTML = review.text;
        author.textContent = review.author;
        reviewLocation.textContent = review.location;
        image.src = review.image;

        // Анимация приезжающего отзыва
        reviewBlock.classList.remove('slide-out');
        reviewBlock.classList.add('slide-in');
        setTimeout(() => {
            reviewBlock.classList.remove('slide-in');
        }, 500);
    }, 500);
});