// ==============================
// Typing Animation
// ==============================

const words = [
    "Marketing Graduate",
    "Business Analytics Enthusiast",
    "AI Data Analytics Intern",
    "SEO Intern",
    "MBA Aspirant"
];

const typing = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;
            setTimeout(typeEffect, 1500);
            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {

            deleting = false;
            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


// ==============================
// Counter Animation
// ==============================

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            counters.forEach(counter => {

                if (counter.classList.contains("done"))
                    return;

                counter.classList.add("done");

                const target = +counter.dataset.target;

                let current = 0;

                const increment = target / 80;

                function updateCounter() {

                    current += increment;

                    if (current < target) {

                        counter.innerText = Math.floor(current);

                        requestAnimationFrame(updateCounter);

                    } else {

                        if (target >= 1000) {

                            counter.innerText = "1K+";

                        } else {

                            counter.innerText = target + "+";

                        }

                    }

                }

                updateCounter();

            });

        }

    });

}, {

    threshold: 0.5

});

const heroSection = document.querySelector(".hero");

if (heroSection)
    observer.observe(heroSection);


// ==============================
// Scroll Reveal Animation
// ==============================

const revealElements = document.querySelectorAll(
    "section,.project-card,.timeline-item,.skill,.education-card"
);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(el => {

    revealObserver.observe(el);

});


// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});


// ==============================
// Navbar Shadow
// ==============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


// ==============================
// Active Navbar Link
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
