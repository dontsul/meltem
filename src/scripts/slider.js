import Swiper from "swiper";
import "swiper/css";

const paginationWrapper = document.querySelector(".pagination");
const swiperWrapper = document.querySelector(".swiper-wrapper");
const childNodesArraySlides = Array.from(swiperWrapper.children);

// init Swiper:
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  on: {
    slideChangeTransitionEnd: function () {
      const activeIndex = this.realIndex;
      Array.from(paginationWrapper.children).forEach((el, i) => {
        if (i !== activeIndex) {
          el.classList.remove("active-slide");
        } else {
          el.classList.add("active-slide");
        }
      });
    },
  },

  mousewheel: {
    enabled: true,
  },
});

function addPagination() {
  swiperWrapper.style.gridTemplateColumns = `repeat(${childNodesArraySlides.length}, 1fr)`;
  childNodesArraySlides.forEach((child, index) => {
    const itemPagination = document.createElement("div");
    itemPagination.classList.add("item-pagination");
    itemPagination.dataset.index = index;

    paginationWrapper.appendChild(itemPagination);
  });

  const childNodesArrayPagination = Array.from(paginationWrapper.children);
  if (childNodesArrayPagination[0] !== undefined) {
    childNodesArrayPagination[0].classList.add("active-slide");
  }
}
addPagination();

function setActiveSlide(e) {
  const index = e.target.dataset.index;
  swiper.slideTo(Number(index));
}

paginationWrapper.addEventListener("click", setActiveSlide);
