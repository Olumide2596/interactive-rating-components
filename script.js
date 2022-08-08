'use strict';

const submitBtn = document.querySelector('.submit');
const thankYou = document.querySelector('.thank-you');
const rateUs = document.querySelector('.rate-us');
const circles = document.querySelectorAll('.circle');
const rating = document.querySelector('.rating');

circles.forEach((circle, i) =>
	circle.addEventListener('click', () => {
		// circle.classList.reomve('active');
		circle.classList.toggle('active');
		rating.textContent = `${i + 1}`;
	})
);

submitBtn.addEventListener('click', function () {
	rateUs.classList.add('disable');
	thankYou.classList.remove('disable');
});
