const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const animate_spacing = document.querySelectorAll('.spacing');
animate_spacing.forEach((el) => observer.observe(el));