$(document).ready(function () {
    $(".card").mouseenter(function (e) {
        $(this).find(".card-footer").animate({
            opacity: 0,
            bottom: 200
        }, 100, "linear");
    })
    $(".card").mouseleave(function (e) {
        $(this).find(".card-footer").animate({
            opacity: 1,
            bottom: 60
        }, 300, "linear");
    })
})
//-------------menu-----------------------
// $("#js-hamburger").click(function () {
//   $("#js-top-line").toggleClass("active");
//   $("#js-center-line").toggleClass("active");
//   $("#js-bottom-line").toggleClass("active");
//   $("#js-nav").toggleClass("show");
// });



//---------pure js carousel 2--------------------
  var slider1 = document.getElementById('carousel2'),
    sliderItems1 = document.getElementById('holder');
    slide1(slider1, sliderItems1);
  function slide1(wrapper, items) {
    var posX1 = 0,
        posX2 = 0,
        posInitial,
        posFinal,
        threshold = 100,
        slides = items.getElementsByClassName('item-slide-show'),
        slidesLength = slides.length,
        slideSize = items.getElementsByClassName('item-slide-show')[0].offsetWidth,
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

//------------ pure js carousel 3---------------------

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

//-----------------contorol buttons-----------------
function contorolButton(e){
  const corent_button=e.target
  let arr= document.querySelectorAll('.fa-circle'),
  slide = document.querySelectorAll('.slide'),
  slide_width=slide[0].offsetWidth,
  sliderItems = document.getElementById('itemse'),
  posInitial = sliderItems.offsetLeft;
  for(let i=0;i<arr.length;i++) {
    if(corent_button===arr[i]){

      console.log(posInitial)
    }
  }    
} // console.log(arr)
  



