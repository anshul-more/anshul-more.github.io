// ===========================
// Typing Animation
// ===========================

const typing = document.getElementById("typing");

if (typing) {

const words = [
"AI Data Analytics Intern",
"SEO Intern",
"Marketing Graduate",
"MBA Aspirant",
"Business Analytics Enthusiast"
];

let i = 0;
let j = 0;
let deleting = false;

function typeEffect(){

    const word = words[i];

    if(!deleting){

        typing.textContent = word.substring(0,j++);
        
        if(j > word.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;
        }

    }else{

        typing.textContent = word.substring(0,j--);

        if(j < 0){

            deleting = false;

            i++;

            if(i >= words.length)
                i = 0;
        }

    }

    setTimeout(typeEffect,deleting ? 50 : 100);

}

typeEffect();

}


// ===========================
// Counter Animation
// ===========================

const counters = document.querySelectorAll(".counter");

function startCounter(counter){

    const target = Number(counter.dataset.target);

    let current = 0;

    const step = target / 80;

    function update(){

        current += step;

        if(current < target){

            counter.innerHTML = Math.floor(current);

            requestAnimationFrame(update);

        }else{

            if(target >= 1000){

                counter.innerHTML = "1K+";

            }else{

                counter.innerHTML = target + "+";

            }

        }

    }

    update();

}

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

document.querySelectorAll(".counter").forEach(counter=>{

if(!counter.classList.contains("done")){

counter.classList.add("done");

startCounter(counter);

}

});

}

});

});

observer.observe(document.querySelector(".hero"));
