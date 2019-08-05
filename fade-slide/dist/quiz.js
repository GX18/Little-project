currentQuestion = 0
function render(question, anwser) {
  document.getElementById("quest").innerHTML = question;
  document.getElementById("anwser").innerHTML = anwser;

}


function Slide(id) {
  const el = document.getElementById(id);
  const wrapper = el.querySelector('.slide-wrapper');
  const slideItem = el.querySelectorAll('.slide-item');

  function init() {
    buildDots();
    render(data[currentQuestion].question, data[currentQuestion]["a1"])
    bindEvents();
  }


  function buildDots() {
    let paginationList = '';

    for (let i = 0; i < 4; i += 1) {
      paginationList += '<li><a data-index=\"' + i + '\" href=\"#' + i + '"\></a></li>';
    }

    const pagination = document.createElement('ul');
    pagination.setAttribute('class', 'slide-dots');
    pagination.innerHTML = paginationList;

    wrapper.appendChild(pagination);
  }



  function setActive(items, currentIndex) {
    items.forEach((element, index) => {
      if (element.classList.contains('is-active')) {
        element.classList.remove('is-active');
      }
    });

    items[currentIndex].classList.add('is-active');
  }



  function bindEvents() {
    const dots = el.querySelectorAll('.slide-dots > li a');
    dots[0].classList.add('is-active');
    slideItem[0].classList.add('is-active');
    dots.forEach((item, index) => {
      item.addEventListener('click', e => {
        e.preventDefault();
        setActive(dots, index);
        render(data[currentQuestion].question, data[currentQuestion][`a${index + 1}`])
      });
    });
  }

  init();
}




new Slide('slide');

document.getElementById("anwser").addEventListener("click", () => {
  ++currentQuestion;
  render(data[currentQuestion].question, data[currentQuestion]["a1"])
})