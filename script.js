'use strict';

const submitBtn = document.querySelector('.submit');
const thankYou = document.querySelector('.thank-you');
const rateUs = document.querySelector('.rate-us');
const circles = document.querySelectorAll('.circle');
const rating = document.querySelector('.rating');
const submitText = document.querySelector('.submit-p');

circles.forEach((circle, i) =>
	circle.addEventListener('click', () => {
		// circle.classList.toggle('active');
		// used :focu on the css to solve
		rating.textContent = `${i + 1}`;
	})
);

submitBtn.addEventListener('click', function () {
	if (rating.textContent) {
		rateUs.classList.add('disable');
		thankYou.classList.remove('disable');
	} else {
		submitText.textContent = `Choose a rating😁`;
	}
});
