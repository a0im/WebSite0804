const inCtgs = document.querySelectorAll(".exp__list");
const ctgs = document.querySelectorAll(".exps__inner");
const ctgWrap = document.querySelector(".categori__menu__wrap");
const ticker = document.querySelector(".ticker");
const tickerWrap = document.querySelector(".tickerWrap");

const programLists = document.querySelectorAll(".content");
// const programContent = document.querySelector(".program__contents");
const programListNum = document.querySelectorAll(".content__description__num");
const program = document.querySelector(".program");

//ctgs foreach로 한바퀴 더돌려서 지우는 시간이
//class 추가하는 시간보다 더 걸려서 add를 비동기로 바꿔서 늦게 추가함
//좀더 가독성 좋은 코드로 리팩토링을 생각해보자 .
ctgs.forEach((d1v) => {
  d1v.addEventListener("mouseover", (e) => {
    inCtgs.forEach((d2v) => {
      ctgs.forEach((e) => {
        e.classList.remove("activeOver");
      });
      if (d1v.parentNode !== d2v.parentNode) {
        d2v.classList.remove("activeNav");
      } else {
        setTimeout(() => {
          d1v.classList.add("activeOver");
        }, 0);
        d2v.classList.add("activeNav");
      }
    });
  });
});

function addEvent(dom, event) {
  dom.addEventListener(event, (e) => {
    // console.log(e);
    inCtgs.forEach((a) => {
      // console.log(a);
      a.classList.remove("activeNav");
      ctgs.forEach((e) => {
        e.classList.remove("activeOver");
      });
    });
  });
}
addEvent(ctgWrap, "mouseleave");

function runOverTicker(event, type) {
  ticker.addEventListener(event, (e) => {
    const wrap = e.target.children;
    for (let i = 0; i < wrap.length; i++) {
      wrap[i].style.animationPlayState = type;
    }
  });
}
runOverTicker("mouseenter", "paused");
runOverTicker("mouseleave", "running");

function hoverPrintImg(params) {
  programLists.forEach((e) => {
    e.addEventListener("mouseenter", (e) => {
      for (let i = 0; i < programLists.length; i++) {
        let index = i + 1;

        program.classList.remove(`program__img__${index}`);

        if (e.target === programLists[i]) {
          program.classList.add(`program__img__${index}`);
          console.log(programLists[i]);
        }
      }
    });
  });
}
hoverPrintImg();
