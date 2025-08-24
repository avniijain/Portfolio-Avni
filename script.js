document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }

            // Update active nav item
            document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Fade in animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form'); // make sure it's ID not class

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            emailjs.sendForm("service_m8wniko", "template_4xulyud", ".contact-form", "VnrxXNBZPazcrmZnm")
                .then(() => {
                    alert("Message sent successfully!");
                    this.reset();
                }, (err) => {
                    alert("Failed to send message. " + JSON.stringify(err));
                    console.error(err);
                });
        });
    }

});
