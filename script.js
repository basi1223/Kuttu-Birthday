const startBtn = document.getElementById("startBtn");
const replayBtn = document.getElementById("replayBtn");

const nextBtn = document.getElementById("nextBtn");
const homeBtn = document.getElementById("homeBtn");

const moonBtn = document.getElementById("moonBtn");
const zoomBtn = document.getElementById("zoomBtn");
const backFromMoon = document.getElementById("backFromMoon");

const hearts = document.querySelector(".hearts");

const memoriesPage = document.getElementById("memoriesPage");
const pageTwo = document.getElementById("pageTwo");

const moonPage = document.getElementById("moonPage");
const kuttuReveal = document.getElementById("kuttuReveal");


/* =========================
   FLOATING HEARTS
========================= */

function makeHeart() {

  const h = document.createElement("div");

  h.className = "heart";

  h.textContent = [
    "❤️",
    "♡",
    "💕",
    "✨"
  ][Math.floor(Math.random() * 4)];

  h.style.left =
    Math.random() * 100 + "vw";

  h.style.fontSize =
    (10 + Math.random() * 18) + "px";

  h.style.animationDuration =
    (5 + Math.random() * 5) + "s";

  hearts.appendChild(h);

  setTimeout(() => {
    h.remove();
  }, 10000);
}


setInterval(makeHeart, 900);


/* =========================
   OPEN BUTTON
   HERO → MEMORIES
========================= */

startBtn.addEventListener("click", () => {

  memoriesPage.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });


  for (let i = 0; i < 15; i++) {

    setTimeout(() => {
      makeHeart();
    }, i * 100);

  }

});


/* =========================
   NEXT
   MEMORIES 1 → MEMORIES 2
========================= */

nextBtn.addEventListener("click", () => {

  pageTwo.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

});


/* =========================
   HOME
========================= */

homeBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* =========================
   AMBILI MAMAN
========================= */

moonBtn.addEventListener("click", () => {

  moonPage.classList.add("active");

  document.body.style.overflow = "hidden";

  setTimeout(() => {

    moonPage.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }, 50);

});


/* =========================
   MOON ZOOM
========================= */

zoomBtn.addEventListener("click", () => {

  moonPage.classList.add("zooming");

  const moonText =
    document.getElementById("moonText");

  moonText.textContent =
    "Kuttu... ❤️";


  setTimeout(() => {

    moonPage.classList.remove("active");
    moonPage.classList.remove("zooming");

    kuttuReveal.classList.add("active");

    document.body.style.overflow = "auto";

    kuttuReveal.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });


  }, 2600);

});


/* =========================
   BACK FROM KUTTU PHOTO
========================= */

backFromMoon.addEventListener("click", () => {

  kuttuReveal.classList.remove("active");

  document.body.style.overflow = "auto";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* =========================
   REPLAY
========================= */

replayBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* =========================
   SOFT REVEAL
========================= */

const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.animate(

            [
              {
                opacity: 0,
                transform:
                  "translateY(22px)"
              },

              {
                opacity: 1,
                transform:
                  "translateY(0)"
              }
            ],

            {
              duration: 800,
              easing: "ease-out",
              fill: "forwards"
            }

          );

          observer.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.12
    }

  );


document
  .querySelectorAll(".section > *")
  .forEach((el) => {

    observer.observe(el);

  });
