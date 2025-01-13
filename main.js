// for animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log('the main.js file is running')
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})
const hiddenElements = document.querySelectorAll('.myHidden');
hiddenElements.forEach((el) => observer.observe(el));