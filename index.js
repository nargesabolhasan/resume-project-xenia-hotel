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
  //-------------menu-----------------------
  $('#burger-menu').click(function () {
    $('.menu-widget').css({
      transform: 'translate(0px,97px)',
      transition: "all .5s"
    });
    if (window.matchMedia('(max-width: 1901px)').matches) {
      $('.menu').css({
        position: 'fixed',
        left: '82.5vw',
        transition: "all .5s"
      });
    }
    if (window.matchMedia('(max-width: 1324px)').matches) {
      $('.menu').css({
        position: 'fixed',
        left: '78vw',
        transition: "all .5s"
      });
    }
    if (window.matchMedia('(max-width: 986px)').matches) {
      $('.menu').css({
        position: 'fixed',
        left: '67.5vw',
        transition: "all .5s"
      });
    }
    if (window.matchMedia('(max-width: 764px)').matches) {
      $('.menu').css({
        position: 'fixed',
        left: '58vw',
        transition: "all .5s"
      });
    }
    //shift page to left
    $('.navBar').css({
      transform: 'translateX(-300px)',
      transition: "all .5s"
    })
    $('.date-box-wraper').css({
      transform: 'translate(-310px,0px)',
      transition: 'all .5s'
    })
    $('.wraper2').css({
      transform: 'translate(-310px,660px)',
      transition: "all .5s"
    })
    //
    $('.burger-widget').css({
      transform: 'translate(100px,0px)',
      transition: "all .5s"
    })
  })
  $('.burger-widget2').css({
    opacity: '1',
    transition: "all .5s"
  })

  //---------------go up--------------------
  $('.go-up').click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");

  })

  //--------------first caruosel-------------
  $('#carousel-next').click(carousel);
  $('#carousel-prev').click(carousel);
  function carousel() {
    let carousel = $(this).parents('.first-slide-show');
    let index = $(carousel).find('.caro-item.active1').index();
    let content = $(carousel).find('.carousel-holder');
    const length_item = $(carousel).find(".caro-item").length;

    if ($(this).attr('id') === 'carousel-next') {
      if (index < length_item - 1) {
        //respond
        if (window.matchMedia('(max-width: 986px)').matches) {
          $(content).css('transform', `translateX(${(index + 1) * -986}px)`)
        } else if (window.matchMedia('(max-width: 764px)').matches) {
          $(content).css('transform', `translateX(${(index + 1) * -986}px)`)
        } else {
          $(content).css('transform', `translateX(${(index + 1) * -1900}px)`)
        }
        $(carousel).find('.caro-item.active1').removeClass('active1')
        $(carousel).find('.caro-item').eq(index + 1).addClass('active1')

      } else {
        $(carousel).find('.caro-item.active1').removeClass('active1')
        $(carousel).find('.caro-item').eq(0).addClass('active1')
      }
      //prev
    } else {
      if (index > 0) {
        if (window.matchMedia('(max-width: 986px)').matches) {
          $(content).css('transform', `translateX(${(index - 1) * -986}px)`)
        } else if (window.matchMedia('(max-width: 764px)').matches) {
          $(content).css('transform', `translateX(${(index- 1) * -986}px)`)
        } else {
          $(content).css('transform', `translateX(${(index - 1) * -1900}px)`)
        }
        $(carousel).find('.caro-item.active1').removeClass('active1')
        $(carousel).find('.caro-item').eq(index - 1).addClass('active1')
      } else {
        $(carousel).find('.caro-item.active1').removeClass('active1')
        $(carousel).find('.caro-item').eq(0).addClass('active1')
      }

    }

  }

  ///////
  //auto carousel:
  function nextauto() {
    let carousel = $('.first-slide-show');
    let index = $(carousel).find('.caro-item.active1').index();
    let content = $(carousel).find('.carousel-holder');
    const length_item = $(carousel).find(".caro-item").length;
    if (index < length_item - 1) {
      if (window.matchMedia('(max-width: 986px)').matches) {
        $(content).css('transform', `translateX(${(index + 1) * -986}px)`)
      } else if (window.matchMedia('(max-width: 764px)').matches) {
        $(content).css('transform', `translateX(${(index + 1) * -986}px)`)
      } else {
        $(content).css('transform', `translateX(${(index + 1) * -1900}px)`)
      }
      $(carousel).find('.caro-item.active1').removeClass('active1')
      $(carousel).find('.caro-item').eq(index + 1).addClass('active1')
    } else {
      $(carousel).find('.caro-item.active1').removeClass('active1')
      $(carousel).find('.caro-item').eq(0).addClass('active1')
    }
  }
  setInterval(nextauto, 3000);

  //date btn:
  $('.btn-date').click(function () {
    $(this).attr('type', 'date')

  })


})
function handelDate(e) {
  e.preventDefault();
  // let form = e.target
  // let formData = new FormData(form) 
  // for(var pair of formData.entries()) {
  //   let index1=pair[0].getTime();
  //   let index2 =pair[1].getTime();
  let index12 = $('#date1').val().getTime();
  let index22 = $('#date2').val().getTime();
  console.log(index12, index22)

}
$.ajax({
  type: 'GET',
  url: "http://localhost:3000/room",
  cache: false,
  success: function (response) {
    console.log(response)
    arrayOfDate = [],
      tableBody = $('table'),
      response.map(item => {
        const enteyOfDate = new Date(item.form).getTime();
        const enteyOfDeparture = new Date(item.to).getTime();
        const mark = `<tr><td class="td">${item.from}</td><td class="td">${item.to}</td></tr>`
        tableBody.append(mark)
        // if()

      })
  }
});


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

  function dragStart(e) {
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
  function dragAction(e) {
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

  function dragEnd(e) {
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

  function checkIndex() {
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

  function dragStart(e) {
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
  function dragAction(e) {
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

  function dragEnd(e) {
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

  function checkIndex() {
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
// function contorolButton(e) {
//  $(this).find()
// } // console.log(arr)
$()

// setInterval(auto(),3000)
////////////////////







