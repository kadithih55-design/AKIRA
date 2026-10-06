```javascript
/* =========================================
   FLOATING HEARTS
========================================= */

const heartsContainer = document.querySelector(".hearts-container");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["♡", "♥", "♡", "❤"];

    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 18 + 10 + "px";

    heart.style.animationDuration =
        Math.random() * 6 + 6 + "s";

    heart.style.opacity =
        Math.random() * 0.5 + 0.2;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 13000);
}


/* Create hearts continuously */

setInterval(createHeart, 700);


/* =========================================
   BUTTON EFFECT
========================================= */

const loveButton = document.querySelector(".main-button");

loveButton.addEventListener("click", function () {

    for (let i = 0; i < 15; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.classList.add("heart");

            heart.innerHTML = "♥";

            heart.style.left =
                40 + Math.random() * 20 + "vw";

            heart.style.bottom = "45%";

            heart.style.fontSize =
                Math.random() * 20 + 15 + "px";

            heart.style.animationDuration =
                Math.random() * 2 + 3 + "s";

            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 6000);

        }, i * 100);
    }

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".timeline-item, .letter-card, .number-box, .forever-content"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform = "translateY(35px)";

    element.style.transition =
        "opacity 1s ease, transform 1s ease";

    observer.observe(element);

});


/* =========================================
   ANNIVERSARY DATE
========================================= */

const anniversaryDate = new Date("October 7, 2026");

console.log(
    "Our 8th Anniversary:",
    anniversaryDate.toDateString()
);


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "8 years down. Forever to go. ❤️"
);
```
