const expList = document.querySelectorAll(".exp__list");
const expInner = document.querySelectorAll(".exps__inner");
const ctgWrap = document.querySelector(".categori__menu__wrap");
const ticker = document.querySelector(".ticker");
const tickerWrap = document.querySelector(".tickerWrap");
const program = document.querySelector(".program");
const programLists = document.querySelectorAll(".content");
const ctgContain = document.querySelector(".nav__categoris");
const navWrap = document.querySelector(".nav-wrap");
const crossBtn = document.querySelector(".categori__btn__icon");
console.log(ctgContain, navWrap);
console.log(program);
console.log(programLists);

const onNav = (a) => {
  a.target.classList.add("activeOver");
  a.target.nextElementSibling.classList.add("activeNav");
};

const closeNav = (a) => {
  expInner.forEach((del) => {
    del.classList.remove("activeOver");
    a.target.nextElementSibling.classList.remove("activeNav");
  });
};

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

const pgImgHover = (e) => {
  for (let i = 0; i < programLists.length; i++) {
    let index = i + 1;
    program.classList.remove(`program__img__${index}`);
    if (e.target === programLists[i]) {
      program.classList.add(`program__img__${index}`);
      console.log(programLists[i]);
    }
  }
};
const pgImgUnHover = (e) => {
  program.classList.remove(program.className.split(" ")[1]);
};

/* 반응형 */
window.addEventListener("resize", () => {
  if (window.innerWidth > 985) {
    expInner.forEach((e) => {
      e.addEventListener("mouseenter", onNav);
      e.addEventListener("mouseleave", closeNav);
    });
    programLists.forEach((e) => {
      e.addEventListener("mouseenter", pgImgHover);
      e.addEventListener("mouseleave", pgImgUnHover);
    });
  } else {
    programLists.forEach((e) => {
      e.removeEventListener("mouseenter", pgImgHover);
      e.removeEventListener("mouseleave", pgImgUnHover);
    });
    expInner.forEach((e) => {
      e.removeEventListener("mouseenter", onNav);
      e.removeEventListener("mouseleave", closeNav);
    });
  }
});

expInner.forEach((e) => {
  e.addEventListener("click", (tag) => {
    tag.stopPropagation();
    let focus = tag.target.className === "exps__inner" ? tag.target : tag.target.parentElement;
    focus.nextElementSibling.style.display = "flex";

    for (let i = 0; i < expInner.length; i++) {
      if (focus === expInner[i]) {
        console.log(expInner[i]);
      }
    }
  });
});

console.log(expInner.values);
let tnf = false;
navWrap.addEventListener("click", () => {
  ctgContain.style.display = tnf ? "none" : "flex";
  tnf = !tnf;
});

/* 몰랐던거 
1. window.addEventListener("resize", () => {
  if (window.innerWidth > 985) 화면너비값 실시간으로 가져오기
  

2.  removeEventListener사용방법
  
3. 이벤트 버블링 차단 stopPropagation() 메서드 
  */

// ctgs.forEach((d1v) => {
//   d1v.addEventListener("mouseover", (e) => {
//     inCtgs.forEach((d2v) => {
//       ctgs.forEach((e) => {
//         e.classList.remove("activeOver");
//       });
//       if (d1v.parentNode !== d2v.parentNode) {
//         d2v.classList.remove("activeNav");
//       } else {
//         setTimeout(() => {
//           d1v.classList.add("activeOver");
//         }, 0);
//         d2v.classList.add("activeNav");
//       }
//     });
//   });
// });

// function addEvent(dom, event) {
//   dom.addEventListener(event, (e) => {
//     // console.log(e);
//     inCtgs.forEach((a) => {
//       // console.log(a);
//       a.classList.remove("activeNav");
//       ctgs.forEach((e) => {
//         e.classList.remove("activeOver");
//       });
//     });
//   });
// }
// addEvent(ctgWrap, "mouseleave");
