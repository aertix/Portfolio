
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('fly')
        }
    })
})

const hiddenElements = document.querySelectorAll('.scroll')
hiddenElements.forEach((el) => observer.observe(el))