currentQuestion = 0
function render(question, anwser, child) {
  document.getElementById("quest").innerHTML = question;
  var currentIMG = data[currentQuestion].imgSrc;
  console.log(currentIMG)
  document.getElementById("slide").style.backgroundImage = `url(${currentIMG})`;
  document.getElementById("anwser").innerHTML = anwser;
  if(child==0){
    document.getElementById("slide-item").style.backgroundImage = "linear-gradient(to right top, #ffb88a, #fc9f6e, #fa8456, #f66542, #f23e33)";
  } else if (child==1) {
    document.getElementById("slide-item").style.backgroundImage = "linear-gradient(to right top, #ffb88a, #fc9f6e, #fa8456, #f66542, #f23e33)";
  } else if(child==2){
    document.getElementById("slide-item").style.backgroundImage = "linear-gradient(to right top, #9accff, #a2c2f3, #a8b9e6, #aab0d8, #aba8ca)";
    
  } else if(child==3) {
    document.getElementById("slide-item").style.backgroundImage = "linear-gradient(to right top, #514e1d, #5e6521, #667d27, #699632, #65b142)";
  } else if(child==4) {
    document.getElementById("slide-item").style.backgroundImage = "linear-gradient(to right top, #8cc4fe, #4ea2ff, #007dff, #0054f6, #2913e1)";
  }
}


function Slide(id) {
  const el = document.getElementById(id);
  const wrapper = el.querySelector('.slide-wrapper');
  const slideItem = el.querySelectorAll('.slide-item');

  function init() {
    buildDots();
    render(data[currentQuestion].question, data[currentQuestion]["a1"],0)
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
        render(data[currentQuestion].question, data[currentQuestion][`a${index + 1}`], index+1)
      });
    });
  }

  init();
}




new Slide('slide');

document.getElementById("anwser").addEventListener("click", () => {
  ++currentQuestion;
  render(data[currentQuestion].question, data[currentQuestion]["a1"],0)
})