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
const state = {};
const url = "/Dean-project/";
let popupAnimation;

const popupSectionTl = gsap.timeline({
  duration: popupDuration,
  onReverseComplete: () => {
    popupSection.classList.add("hidden");
  },
});

popupAnimation = popupSectionTl
  .from(popupContainer, {
    ease: "power3.out",
    y: -100,
    opacity: 0,
    duration: popupDuration,
  })
  .from(imgPopIcon, { y: 50, opacity: 0, duration: popupDuration })
  .from(popTitle, { x: -50, opacity: 0, duration: popupDuration }, "-=90%")
  .from(
    popupParagraph,
    { ease: "power3.out", y: -100, opacity: 0, duration: popupDuration },
    "-=50%",
  )
  .from(
    popupSignature,
    { x: -50, opacity: 0, duration: popupDuration },
    "-=50%",
  )
  .from(
    closebtn,
    { x: -50, y: -50, rotate: "-50deg", opacity: 0, duration: popupDuration },
    "-=50%",
  );
popupAnimation.pause();
// load popup on start 🤓🌟

btnForPopup.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    popupSection.classList.remove("hidden");
    popupContainer.className = "popup-container";
    popupContainer.classList.add(`gr-${i + 1}-row`);

    imgPopIcon.setAttribute("src", `./imgs/icons/${i + 1}-icon.png`);
    popupParagraph.innerHTML = data[i].desc;
    popTitle.innerHTML = data[i].title;
    popupSignature.innerHTML = data[i].signature || "";
    popupAnimation.play();
  });
});
const golabaleTl = gsap.timeline({
  defaults: {
    duration: titleAnimation,
    ease: "power1.in",
  },
});
// animation row on start

golabaleTl
  .fromTo(
    ".boxstyle1",
    { height: 0, duration: titleAnimation },
    { height: "100%", duration: titleAnimation },
  )
  .fromTo(
    btnForPopup,
    { x: -100, opacity: 0, duration: titleAnimation },
    {
      x: 0,
      opacity: 1,
      stagger: staggerRows,
      ease: "elastic.out(1, 1)",
      duration: titleAnimation,
    },
  );

//eventListener

closebtn.addEventListener("click", (e) => {
  // popupSection.classList.add("hidden");
  popupAnimation.reverse();
  history.pushState(state, "", url);
  if (popupDuration == 0) {
    setTimeout(() => {
      popupSection.classList.add("hidden");
    }, popupDuration * 3000);
  }
});
overlay.addEventListener("click", (e) => {
  // popupSection.classList.add("hidden");
  popupAnimation.reverse();
  if (popupDuration == 0) {
    setTimeout(() => {
      popupSection.classList.add("hidden");
    }, popupDuration * 3000);
  }
  history.pushState(state, "", url);
});

window.addEventListener("load", () => {
  let allHrefs = [];
  btnForPopup.forEach((btn, i) => {
    btn.setAttribute("href", data[i].href);
    allHrefs.push(encodeURI(data[i].href));
  });

  const urlParams = window.location.href;
  const hashIndex = urlParams.indexOf("#");
  const urlToken = urlParams.slice(hashIndex);

  allHrefs.forEach((url, i) => {
    if (url == urlToken) {
      popupSection.classList.remove("hidden");
      popupContainer.className = "popup-container";
      popupContainer.classList.add(`gr-${i + 1}-row`);
      imgPopIcon.setAttribute("src", `./imgs/icons/${i + 1}-icon.png`);
      popupParagraph.innerHTML = data[i].desc;
      popTitle.innerHTML = data[i].title;
      popupSignature.innerHTML = data[i].signature || "";
      popupAnimation.play();
    }
  });
});
