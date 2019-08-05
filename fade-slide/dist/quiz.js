function Slide(id) {
  const el = document.getElementById(id);
  const wrapper = el.querySelector('.slide-wrapper');
  const slideItem = el.querySelectorAll('.slide-item');

  function init() {
    buildDots();
    bindEvents();
  }

  function setActive(items, currentIndex) {
    items.forEach((element, index) => {
      if (element.classList.contains('is-active')) {
        element.classList.remove('is-active');
      }
    });

    items[currentIndex].classList.add('is-active');
  }

  function buildDots() {
    let paginationList = '';

    for (let i = 0; i < slideItem.length; i += 1) {
      paginationList += '<li><a data-index=\"' + i + '\" href=\"#' + i + '"\></a></li>';
    }

    const pagination = document.createElement('ul');
    pagination.setAttribute('class', 'slide-dots');
    pagination.innerHTML = paginationList;

    wrapper.appendChild(pagination);
  }

  function bindEvents() {
    const dots = el.querySelectorAll('.slide-dots > li a');
    dots[0].classList.add('is-active');
    slideItem[0].classList.add('is-active');
    dots.forEach((item, index) => {
      item.addEventListener('click', e => {
        e.preventDefault();

        setActive(slideItem, index);
        setActive(dots, index);
      });
    });
  }

  init();
}


const mySlide = new Slide('slide');





