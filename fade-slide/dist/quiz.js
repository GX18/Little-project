function Slide(id) {
  const el = document.getElementById(id);
  const wrapper = el.querySelector('#slide-wrapper');
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

var questions = [
  {"You are lost in side a forest and you meet a pathway, which path do you choose?": ["The route towards the castle","The route towards the sea", "The route towards the jungle"]},
  {"You open a treasure chest and are granted a chance to take one item, which item do you choose:" : ["A white dagger that has a red gem carved in the middle of the handle","A book full of enchantment and magic","A golden key"]},
  {"Before making a decision, on which do you rely?" : ["Your head", "Your heart", "Your friend/both"]},
  {"You prefer which playes of cards?" : ["The Ace", "The Queen", "The King", "The Jack", "The Pawn", "The Joker"]},
  {"What is your sign?" : ["The Heart", "The Diamond", "The Spade", "The Clover"]},
  {"You are opposed to a very strong warrior in the bridge and you have to fight them to get over it" : ["Try to negotiate a peacful method", "Bring on a 1-1 battle", "Just ignore them", "Call a friend for help"]},
  {"What is your favourite cake?" : ["Brownie", "Donut", "Black forest cake", "Moon cake"]},
  {"Which is your favourtie animal?" : ["Tree", "Human", "Spider", "Dog"]},
  {"What is your dream job among this:" : ["Education", "IT", "Design", "Cakery"]},
  {"Who are you?" : ["The sunshine of the group", "The presenter", "The rebel", "The silent sacrifice"]},
  {"Choose a card?" : ["The World", "The Empress", "Knight of Swords", "The hanged man"]},
  {"Your dream field?" : ["A firefighter", "A vlogger", "Baseball player/ Athletic", "Teacher"]},
  {"You accidentally erased some of the magic potion in the lab, and you can only recreate one, which one would you choose?" : ["The potion that can heal everything", "The potion that can grant you eternal beauty and youth", "The potion that can grant you power", "The potion that give you wisdom"]},
  {"What power do you want to have?": ["Healing", "Time Reverse"]}
]


