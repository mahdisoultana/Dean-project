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

btnForPopup.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    popupSection.classList.remove("hidden");
    popupContainer.className = "popup-container";
    popupContainer.classList.add(`gr-${i + 1}-row`);

    imgPopIcon.setAttribute("src", `./imgs/icons/${i + 1}-icon.png`);
    popupParagraph.textContent = data[i].desc;
    popTitle.textContent = data[i].title;
  });
});
const golabaleTl = gsap.timeline({
  defaults: {
    duration: 0.3,
    ease: "power1.in",
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
  popupSection.classList.add("hidden");
});
overlay.addEventListener("click", (e) => {
  popupSection.classList.add("hidden");
});
