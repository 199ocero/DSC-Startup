const toAnimate = document.querySelector("div.animate");
const anim = document.querySelectorAll(".animate");

const testOptn = {
  threshold: 0,
  // rootMargin: "0px 0px -250px 0px"
};

const obs_svg1 = new IntersectionObserver(function(el, testObs) {
  el.forEach((e, i) => {
    console.log("Page loaded.")
    if (!e.isIntersecting) {
      return;
    } else {
      console.log(e.target);
      setTimeout(() => {e.target.classList.add("anim-once");}, 2000);
      setTimeout(() => {e.target.classList.remove("anim-once");}, 4000);
      testObs.unobserve(e.target);
    }
  });
},
testOptn);

document.onload = obs_svg1.observe(toAnimate);

const toAnimate2 = document.querySelector(".svg-2");

testOptn2 = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const obs_svg2 = new IntersectionObserver(function(el, testObs) {
  el.forEach((e, i) => {
    if (!e.isIntersecting) {
      return;
    } else {
      console.log(e.target);
      setTimeout(() => {e.target.classList.add("animate");console.log('added');}, 250);
      testObs.unobserve(e.target);
    }
  });
},
testOptn2);

document.onload = obs_svg2.observe(toAnimate2);
