const words = [
"AI Data Analytics Intern",
"SEO Intern",
"Marketing Graduate",
"MBA Aspirant",
"Business Analytics Enthusiast"
];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current=words[i];

if(isDeleting){

document.getElementById("typing").textContent=current.substring(0,j--);

if(j<0){

isDeleting=false;
i++;

if(i==words.length)
i=0;

}

}

else{

document.getElementById("typing").textContent=current.substring(0,j++);

if(j>current.length){

isDeleting=true;

setTimeout(type,1000);

return;

}

}

setTimeout(type,isDeleting?60:120);

}

type();
// ==============================
// Counter Animation
// ==============================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function animateCounters() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const target = parseInt(counter.dataset.target);

        let current = 0;

        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16);

        function update() {

            current += increment;

            if (current < target) {

                counter.textContent = Math.floor(current);

                requestAnimationFrame(update);

            } else {

                if (target >= 1000) {

                    counter.textContent = "1K+";

                } else {

                    counter.textContent = target + "+";

                }

            }

        }

        update();

    });

}

// Start animation when Hero is visible

const hero = document.querySelector(".hero");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounters();

        }

    });

}, {
    threshold: 0.4
});

observer.observe(hero);
