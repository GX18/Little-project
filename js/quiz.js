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
    document.getElementById("slide-item").style.backgroundImage = "linear-gradient(to right top, #3a70bb, #3f63bf, #5153bf, #673fb9, #7e1bae)";
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
var Score = 0;
document.getElementById("anwser").addEventListener("click", (e) => {
if (currentQuestion<data.length) {
  if (e.target.innerHTML==data[currentQuestion].a1) {
    Score= Score + 48;
  } else if (e.target.innerHTML==data[currentQuestion].a2) {
    Score = Score + 36;
  } else if (e.target.innerHTML==data[currentQuestion].a3) {
    Score = Score + 24;
  } else if (e.target.innerHTML==data[currentQuestion].a4) {
    Score = Score + 12;
  }
  ++currentQuestion;
  render(data[currentQuestion].question, data[currentQuestion]["a1"],0);
} else {
    if (Score>=180&&Score<225) {
      location.href  = "";
    } else if (Score>=225&&Score<270) {
      location.href = "";
    }  else if (Score>=270&&Score<315) {
      location.href = "";
    } else if (Score>=315&&Score<360) {
      location.href = "";
    } else if (Score>=360&&Score<405) {
      location.href = "";
    } else if (Score>=405&&Score<450) {
      location.href = "";
    } else if (Score>=450&&Score<495) {
      location.href = "";
    }else if (Score>=495&&Score<540) {
      location.href = "";
    }else if (Score>=540&&Score<585) {
      location.href = "";
    } else if (Score>=585&&Score<630) {
      location.href = "";
    } else if (Score>=630&&Score<675) {
      location.href = "";
    } else if (Score>=675&&Score<720) {
      location.href = "";
    }
    
}
})
