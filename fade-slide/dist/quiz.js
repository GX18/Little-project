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


 

 


data = [
  {
      question: "What is your element?",
      a1 :  "Fire",
      a2 : "Air", 
      a3 : "Earth",
      a4 : "Water",
  },

  {
      question : "You are lost in side a forest and you meet a pathway, which path do you choose?",
      a1 : "The route towards the castle",
      a2 : "The route towards the sea",
      a3 : "The route towards the jungle",
      a4 : "",
      imgSrc : ""
  },

  {
      question : "You open a treasure chest and are granted a chance to take one item, which item do you choose:",
      a1 : "A white dagger that has a red gem carved in the middle of the handle",
      a2 : "A book full of enchantment and magic",
      a3 : "A golden key",
      a4 : "",
      imgSrc : ""
  },

  {
      question : "Before making a decision, on which do you rely?",
      a1 : "Your head",
      a2 : "Your heart",
      a3 : "Your friend/both",
      a4 : "",
      imgSrc : ""
  },

  {
      question : "You prefer which players of cards?",
      a1 : "The Ace",
      a2 : "YThe Queen",
      a3 : "The King",
      a4 : "The Jack",
      imgSrc : ""
  },

  {
      question : "What is your sign?",
      a1 : "The Heart",
      a2 : "The Diamond",
      a3 : "The Spade",
      a4 : "The Clover",
      imgSrc : ""
  },

  {
      question : "You are opposed to a very strong warrior in the bridge and you have to fight them to get over it",
      a1 : "Try to negotiate a peacful method",
      a2 : "Bring on a 1-1 battle",
      a3 : "Just ignore them",
      a4 : "Call a friend for help",
      imgSrc : ""
  },
  {
      question : "What is your favourite cake?",
      a1 : "Brownie",
      a2 : "Donut",
      a3 : "Black forest cake",
      a4: "Moon cake",
      imgSrc : ""
  },
  {
      question : "Which is your favourtie animal?",
      a1 : "Tree",
      a2 : "Human",
      a3 : "Spider",
      a4 : "Dog", 
      imgSrc : ""
  },
  {
      question : "What is your dream job among this:",
      a1 : "Education",
      a2 : "Design",
      a3 : "IT",
      a4 : "Cakery",
      imgSrc : ""
  },
  {
      question : "Who are you?",
      a1 : "The sunshine of the group",
      a2 : "The presenter ",
      a3 : "The rebel",
      a4 : "The silent sacrifice",
      imgSrc : ""
  },
  {
      question : "Choose a card?",
      a1 : "The World",
      a2 : "The Empress",
      a3 : "Knight of Swords",
      a4 : "The hanged man",
      imgSrc : ""
  },
  {
      question : "Your dream field?",
      a1 : "A firefighter",
      a2 : "A vlogger",
      a3 : "Baseball player/ Athletic",
      a4 : "Teacher",
      imgSrc : ""
  },
  {
      question : "You accidentally erased some of the magic potion in the lab, and you can only recreate one, which one would you choose?",
      a1 : "The potion that can heal everything",
      a2 : "The potion that can grant you eternal beauty and youth",
      a3 : "The potion that can grant you power",
      a4 : "The potion that give you wisdom",
      imgSrc : ""
  },

]    
  
count = 0
function render() {
  document.getElementById("a1").innerHTML = data[count].a1;
  document.getElementById("a2").innerHTML = data[count].a2;
  document.getElementById("a3").innerHTML = data[count].a3;
  document.getElementById("a4").innerHTML = data[count].a4;
  document.getElementById("quest").innerHTML = data[count].question;
}

render();

var a1 = document.getElementById("a1");
a1.addEventListener("click", () => {
  count=count+1;  
  render();
})  