
//map-get(v.$color-pallet,"success")
$(document).ready(function () {
    $(".card").mouseenter(function (e) {
        $(this).find(".overlay").css("height", " 540px");
        $(this).find(".card-footer").animate({
            opacity: 0,
            bottom: 200
        }, 100, "linear");
    })
    $(".card").mouseleave(function (e) {
        $(this).find(".overlay").css("height", "0px");
        $(this).find(".card-footer").animate({
            opacity: 1,
            bottom: 60
        }, 300, "linear");
    })
})

//pure js carousel:
// const prev = document.getElementById("prev");
// const next = document.getElementById("next");

// prev.addEventListener("drag", function () {
//     /* Find the current card */
//     const currCard = document.querySelector(".card.view");
//     /* Set the prevCard based on its availability */
//     const prevCard = currCard.previousElementSibling
//         ? currCard.previousElementSibling
//         : document.querySelector(".card-container").lastElementChild;
//     currCard.classList.remove("view");
//     prevCard.classList.add("view");
// });


// next.addEventListener("drag", function () {
//     /* Find the current card */
//     const currCard = document.querySelector(".card.view");
//     /* Set the nextCard based on its availability */
//     const nextCard = currCard.nextElementSibling
//         ? currCard.nextElementSibling
//         : document.querySelector(".card-container").firstElementChild;
//     currCard.classList.remove("view");
//     nextCard.classList.add("view");
// });
// const nextCard = currCard.nextElementSibling
//     ? currCard.nextElementSibling
//     : document.querySelector(".card-container").firstElementChild;


//pure js carousel:
var slider = document.getElementById('slider'),
    sliderItems = document.getElementById('itemse');
slide(slider, sliderItems);
function slide(wrapper, items) {
  var posX1 = 0,
      posX2 = 0,
      posInitial,
      posFinal,
      threshold = 100,
      slides = items.getElementsByClassName('slide'),
      slidesLength = slides.length,
      slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
      firstSlide = slides[0],
      lastSlide = slides[slidesLength - 1],
      cloneFirst = firstSlide.cloneNode(true),
      cloneLast = lastSlide.cloneNode(true),
      index = 0,
      allowShift = true;
  
  // Clone first and last slide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);
  wrapper.classList.add('loaded');
  
  // Mouse and Touch events
  items.onmousedown = dragStart;
  
  // Touch events
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);
  
  // Transition events
  items.addEventListener('transitionend', checkIndex);
  
  function dragStart (e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = items.offsetLeft;
    
    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }
  function dragAction (e) {
    e = e || window.event;
    
    if (e.type == 'touchmove') {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = (items.offsetLeft - posX2) + "px";
  }
  
  function dragEnd (e) {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, 'drag');
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, 'drag');
    } else {
      items.style.left = (posInitial) + "px";
    }
    document.onmouseup = null;
    document.onmousemove = null;
  }
  
  function shiftSlide(dir, action) {
    items.classList.add('shifting');
    
    if (allowShift) {
      if (!action) { posInitial = items.offsetLeft; }
      if (dir == 1) {
        items.style.left = (posInitial - slideSize) + "px";
        index++;      
      } else if (dir == -1) {
        items.style.left = (posInitial + slideSize) + "px";
        index--;      
      }
    };
    
    allowShift = false;
  }
    
  function checkIndex (){
    items.classList.remove('shifting');
    if (index == -1) {
      items.style.left = -(slidesLength * slideSize) + "px";
      index = slidesLength - 1;
    }
    if (index == slidesLength) {
      items.style.left = -(1 * slideSize) + "px";
      index = 0;
    }
    
    allowShift = true;
  }
}



// @mixin card($content){
//   @include display-flex(column,flex-start);
//   padding:0px 15px;
//   &::before{
//       content:$content;
//       @include width-height(10%,16px);
//       @include img-style;
//       @include position(relative,20px);
//       z-index: 2;
//       padding-left:40px;
//   }

// }