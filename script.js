const popupSection = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const closebtn = document.querySelector(".closebtn");
const imgTitlePopup = document.querySelector(".img-title-popup");
const popupParagraph = document.querySelector(".popup-p");
const popupSignature = document.querySelector(".popup-signature");
const popupContainer = document.querySelector(".popup-container");
const btnForPopup = [...document.querySelectorAll(".btn-for-popup")];
const imgPopIcon = imgTitlePopup.querySelector("img");
const popTitle = imgTitlePopup.querySelector("span");

let popupSectionTl = gsap.timeline({
  defaults: {
    // children inherit these defaults
    duration: 0.3,
  },
  smoothChildTiming: true,

  onReverseComplete: () => {
    popupSection.classList.add("hidden");
  },
});
let popupAnimation;
popupAnimation = popupSectionTl
  .from(popupContainer, { ease: "power3.out", y: -100, opacity: 0 })
  .from(imgPopIcon, { y: 50, opacity: 0 })
  .from(popTitle, { x: -50, opacity: 0 }, "-=90%")
  .from(popupParagraph, { ease: "power3.out", y: -100, opacity: 0 }, "-=50%")
  .from(popupSignature, { x: -50, opacity: 0 }, "-=50%")
  .from(closebtn, { x: -50, y: -50, rotate: "-50deg", opacity: 0 }, "-=50%");
btnForPopup.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    popupSection.classList.remove("hidden");
    popupContainer.className = "popup-container";
    popupContainer.classList.add(`gr-${i + 1}-row`);

    imgPopIcon.setAttribute("src", `./imgs/icons/${i + 1}-icon.png`);
    popupParagraph.textContent = data[i].desc;
    popTitle.textContent = data[i].title;

    //

    popupAnimation.play();
  });
});
const golabaleTl = gsap.timeline({
  defaults: {
    duration: 0.4,
    ease: "power2.in",
  },
});
// animation row on start

golabaleTl
  .from(".boxstyle1", { height: 0 })
  .fromTo(
    btnForPopup,
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, stagger: 0.1, ease: "elastic.out(1, 1)" },
  );

//eventListener
closebtn.addEventListener("click", (e) => {
  popupAnimation.reverse();
});
overlay.addEventListener("click", (e) => {
  popupAnimation.reverse();
});
