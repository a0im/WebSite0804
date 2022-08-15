//==================Dom
const navWrap = document.querySelector(".nav-wrap");
const ctgContain = document.querySelector(".nav__categoris");
const cross = document.querySelector(".fa-solid");
const expInner = document.querySelectorAll(".exps__inner");
const categori = document.querySelectorAll(".categori");
const expLists = document.querySelectorAll(".exp__list");
const expListContent = document.querySelectorAll(".exp__list__content");
const ctgWrap = document.querySelector(".categori__menu__wrap");
const ticker = document.querySelector(".ticker");
const tickerWrap = document.querySelector(".tickerWrap");
const program = document.querySelector(".program");
const programLists = document.querySelectorAll(".content");
const subscribeBox = document.querySelector(".newsletter__btn__wrap");
const arrow = document.querySelector(".newsletter__arrow");
const subscribe = document.querySelector(".btn");
const headerImgcContain = document.querySelector(".header__imgs");
const headerTxtWrap = document.querySelectorAll(".img");
const typograpy = document.querySelectorAll(".img__typograpy");
const typograpyWrap = document.querySelectorAll(".hd__content__wrap");


headerChangeImg = (() => {
  const [...arr] = headerTxtWrap;
  let i = 0;

  function selectImg() {
    if (i >= arr.length) {
      i = 0;
    }
    const delClass = headerImgcContain.classList.item(1);
    headerImgcContain.classList.remove(delClass);
    headerImgcContain.classList.add(`bg${i + Number(1)}`);
    console.log(headerImgcContain.classList.item(1));

    moveTxt()
    i++;
  }


  function moveTxt() {
    headerTxtWrap.forEach(e=>e.classList.remove('flex'))
    headerTxtWrap[i].classList.add('flex')

    typograpyWrap.forEach((target)=>{
      target.classList.remove('ontext')
      if (typograpy[i] === target.parentElement) {
        setTimeout(()=>{
          target.classList.add('ontext');
        },200)
        console.log(target.className);
      }
    })

  }
  setInterval(() => {
    selectImg();
  }, 4000);
})();

//==================Nav

const onNav = (a) => {
  for (let i = 0; i < categori.length; i++) {
    if (a.target === categori[i]) {
      expInner[i].classList.add("activeOver");
      expInner[i].nextElementSibling.classList.add("activeNav");
    }
  }
};

const closeNav = (a) => {
  for (let i = 0; i < categori.length; i++) {
    if (a.target === categori[i]) {
      expInner[i].classList.remove("activeOver");
      expInner[i].nextElementSibling.classList.remove("activeNav");
    }
  }
};

//950px 반응형
function resetNav() {
  let mainNav = ctgContain.classList;
  expLists.forEach((expList) => {
    let list = expList.classList;
    if (mainNav.contains("on__res__nav") || list.contains("onCTG")) {
      mainNav.remove("on__res__nav");
      list.remove("onCTG");
      return;
    }
  });

  return;
}

function closedCTG(ctgList) {
  ctgList.nextElementSibling.classList.remove("onCTG");
  ctgList.children[1].textContent = "+";
}

const onResNav = (function () {
  let toggleNav = false;
  return () => {
    if (toggleNav) {
      cross.classList.remove("rotate");
      ctgContain.classList.remove("on__res__nav");
      expInner.forEach((ctg) => closedCTG(ctg));
    } else {
      cross.classList.add("rotate");
      ctgContain.classList.add("on__res__nav");
    }
    toggleNav = !toggleNav;
  };
})();

const onResCategori = (tag) => {
  tag.stopPropagation();
  let focus = tag.target.classList.contains("exps__inner") ? tag.target : tag.target.parentElement;
  console.log(focus);
  expInner.forEach((ctg) => {
    const expList = ctg.nextElementSibling;
    if (focus === ctg) {
      let bool = expList.classList.toggle("onCTG");
      ctg.children[1].textContent = Boolean(bool) ? "-" : "+";
    } else {
      closedCTG(ctg);
    }
  });

  for (let i = 0; i < expInner.length; i++) {
    if (expInner[i] === focus) {
      expListContent[i].classList.add("translate");
      console.log(expListContent[i]);
    } else {
      expListContent[i].classList.remove("translate");
    }
  }
};

//==================header

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
  program.classList.remove(program.classList.item(1));
};
//==================NewsLetter

const onSubscribe = () => {
  arrow.classList.add("on__arrow");
  writeSub(arrow);
};

const doneSubscribe = () => {
  arrow.classList.remove("on__arrow");
  writeSub(arrow);
};

function writeSub(aw) {
  let sbStyle = subscribe.style;
  aw.classList.contains("on__arrow") ? (sbStyle.color = "transParent") : (sbStyle.color = "black");
}
/* ================Response */

const onloadEvnet = (width) => {
  if (width > 985) {
    categori.forEach((e) => {
      e.addEventListener("mouseenter", onNav);
      e.addEventListener("mouseleave", closeNav);
    });
    programLists.forEach((e) => {
      e.addEventListener("mouseenter", pgImgHover);
      e.addEventListener("mouseleave", pgImgUnHover);
    });
    subscribeBox.addEventListener("mouseenter", onSubscribe);
    subscribeBox.addEventListener("mouseleave", doneSubscribe);
  } else {
    programLists.forEach((e) => {
      e.removeEventListener("mouseenter", pgImgHover);
      e.removeEventListener("mouseleave", pgImgUnHover);
    });

    categori.forEach((e) => {
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
    resetNav();

    expInner.forEach((e) => {
      e.removeEventListener("click", onResCategori);
    });
    navWrap.removeEventListener("click", onResNav);
  }
};

onloadEvnet(window.innerWidth);
window.addEventListener("resize", () => {
  onloadEvnet(window.innerWidth);
});

/* -------------------------알게된것 
1. window.addEventListener("resize", () => {
  if (window.innerWidth > 985) 화면너비값( 실시간으로 가져오기
  )
2.  removeEventListener사용방법
    preventDefault도 사용방법 이벤트 적용한 함수를 콜백함수 값으로 적용해야함
  
3. 이벤트 버블링 막는 stopPropagation() 메서드 

4. resize + window.innerWidth 처럼 동작이 있을때 실행되는 이벤트를 
로드될때 한번은 실행 시켜야한다면 함수로 조건식을 전역으로 빼오고
전역에 한번 호출하고 resize에도 호출식을 넣어두면 로드될때도 한번 호출이됨

5.Boolean 메서드 조건문에 활용 

6. 돔을 안부르고 부모돔의 childen메서드 등을 이용해서 handling 하는 경우 문제가
자주 발생하는데 , 이런경우랑 1대1 대치가 되는 다른테그안의 요소를 사용 해야하는경우
for문에 i값을 이용해서 handling 하자 forEach를 쓰게되면 접근이랑 오류도 자주나게된다 .

7. class 값을 boolean으로 받고 싶으면 classlist 메서드 
contains("on__res__nav")  사용할것
 item(index) <- 인덱스로 접근하고 싶으면
className.splite() 이런거 하지마 

-------------------------해결못한점
exp__list__content 에서 position top 변동에 따른 
transistion 이 작동을 안했음 
그냥 animation으로 처리함 . 

















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
// });`

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
// `  });
// }
// addEvent(ctgWrap, "mouseleave");
