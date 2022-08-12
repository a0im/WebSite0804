//==================Dom
const expList = document.querySelectorAll(".exp__list");
const expInner = document.querySelectorAll(".exps__inner");
const ctgWrap = document.querySelector(".categori__menu__wrap");
const ticker = document.querySelector(".ticker");
const tickerWrap = document.querySelector(".tickerWrap");
const program = document.querySelector(".program");
const programLists = document.querySelectorAll(".content");
const ctgContain = document.querySelector(".nav__categoris");
const navWrap = document.querySelector(".nav-wrap");
const cross = document.querySelector(".fa-solid");
console.log(programLists);

//==================Nav
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

//950px 이하
const onResNav = (function (params) {
  let toggleNav = false;
  return () => {
    ctgContain.style.display = toggleNav ? "none" : "flex";
    toggleNav ? cross.classList.remove("rotate") : cross.classList.add("rotate");
    toggleNav = !toggleNav;
    console.log(cross.className);
  };
})();

const onResCategori = (tag) => {
  tag.stopPropagation();
  let focus = tag.target.className === "exps__inner" ? tag.target : tag.target.parentElement;
  expInner.forEach((navMenu) => {
    const CTG = navMenu.nextElementSibling;
    navMenu.children[1].textContent = "+";
    if (focus === navMenu) {
      let bool = CTG.classList.toggle("onCTG");
      navMenu.children[1].textContent = Boolean(bool) ? "-" : "+";
    } else {
      CTG.classList.remove("onCTG");
    }
  });
};
//==================Program

const pgImgHover = (e) => {
  for (let i = 0; i < programLists.length; i++) {
    let index = i + 1;
    program.classList.remove(`program__img__${index}`);
    if (e.target === programLists[i]) {
      program.classList.add(`program__img__${index}`);
    }
  }
};

const pgImgUnHover = (e) => {
  program.classList.remove(program.className.split(" ")[1]);
};

//==================Ticker

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

/* ================Response */

const onloadEvnet = (width) => {
  if (width > 985) {
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

  if (width < 985) {
    expInner.forEach((e) => {
      e.addEventListener("click", onResCategori);
    });
    navWrap.addEventListener("click", onResNav);
  } else {
    expInner.forEach((e) => {
      e.removeEventListener("click", onResCategori);
    });
    navWrap.removeEventListener("click", onResNav);
    console.log(Boolean());
  }
};

onloadEvnet(window.innerWidth);
window.addEventListener("resize", () => {
  onloadEvnet(window.innerWidth);
});

/* 알게된것 
1. window.addEventListener("resize", () => {
  if (window.innerWidth > 985) 화면너비값 실시간으로 가져오기
  
2.  removeEventListener사용방법
    preventDefault도 사용방법 이벤트 적용한 함수를 콜백함수 값으로 적용해야함
  
3. 이벤트 버블링 차단 stopPropagation() 메서드 

4. resize + window.innerWidth 처럼 동작이 있을때 실행되는 이벤트를 
로드될때 한번은 실행 시켜야한다면 함수로 조건식을 전역으로 빼오고
전역에 한번 호출하고 resize에도 호출식을 넣어두면 로드될때도 한번 호출이됨















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
