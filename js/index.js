const menuEvent = function () {
  const navMenus = document.querySelectorAll(".gnb");
  const navSubmenus = document.querySelectorAll(".gnb-inner");
  const navBg = document.querySelector(".gnb");
  const menuBtn = document.querySelector(".menu-btn");
  const dropdownMenu = document.querySelector(".all-menu-wrap");

  navMenus.forEach((navMenu) => {
    navMenu.addEventListener("mouseenter", () => {
      navSubmenus.forEach((navSubmenu) => {
        navSubmenu.classList.add("on");
      });
      navBg.classList.add("on");
    });

    navMenu.addEventListener("mouseleave", () => {
      navSubmenus.forEach((navSubmenu) => {
        navSubmenu.classList.remove("on");
      });
      navBg.classList.remove("on");
    });
  });

  menuBtn.addEventListener("click", () => {
    if (
      dropdownMenu.style.display === "none" ||
      dropdownMenu.style.display === ""
    ) {
      dropdownMenu.classList.toggle("openmenu");
      menuBtn.classList.toggle("openmenu");
    }
  });
};
menuEvent();

const tabMenu = function () {
  const tabs = document.querySelectorAll(".product-tab li");
  const slides = document.querySelectorAll(".product-slide");

  // 클릭한 탭을 활성화하고 슬라이드를 업데이트
  const activateTab = function (tab) {
    tabs.forEach((li) => li.classList.remove("on"));
    tab.classList.add("on");
    const category = tab.querySelector("a").getAttribute("title");
    updateSlides(category);
  };

  // 선택한 카테고리에 따라 슬라이드를 업데이트
  const updateSlides = function (category) {
    slides.forEach((slide) => {
      if (slide.getAttribute("data-category") === category) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  };

  // 각 탭에 클릭 이벤트 리스너를 추가
  tabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();
      activateTab(this);
    });
  });
  // 처음 탭을 활성화 > 초기화
  activateTab(tabs[0]);
};
// 함수를 호출 > 탭 메뉴를 초기화
tabMenu();
