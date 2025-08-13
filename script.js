const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        const answer = e.currentTarget.parentElement.nextElementSibling;
        answer.classList.toggle('show-answers');
    });
});