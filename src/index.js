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
  //-------------drop down-----------------
  $('#home').mouseenter(function (e) {
    $(".drop-down").css('opacity', '1')
  })
  $('#home').mouseleave(function (e) {
    $(".drop-down").css('opacity', '0')
  })
  //-------------menu-----------------------
  $('#burger-menu').click(function () {
     //shift page to left:
    $('.menu-widget').css({
      transform: 'translate(0px,97px)',
      transition: "all .5s"
    });
    $('.menu-widget').css({
      transform: 'translate(0px,97px)',
      transition: "all .5s"
    });
    $('.nav-linear-item').css({
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
    
    $('.burger-widget').css({
      transform: 'translate(100px,0px)',
      transition: "all .5s"
    })
    //open menu:
    $('.menu').css({
        width:" 320px",
        transition: "width .8s"
    });
    if(window.matchMedia('(max-width: 375px)').matches){
      $('.menu').css({
        width:" 320px",
        position: 'absolute',
        transition: "width .8s"
    });     
     $('.container-widget').css({
      position: 'fixed',
  });
    }
  })


  //close menu
  $('#close-menu').click(function () {
    $('.menu-widget').css({
      transform: 'translate(120px,0px)',
      transition: "all .5s"
    });

    $('.menu').css({
      width:"0px",
      transition: "all .5s"
    });

    //shift page to left
    $('.nav-linear-item').css({
      transform: 'translateX(0px)',
      transition: "all .5s"
    })
    $('.date-box-wraper').css({
      transform: 'translate(0px,0px)',
      transition: 'all .5s'
    })
    $('.wraper2').css({
      transform: 'translate(0px,660px)',
      transition: "all .5s"
    })
    //
    $('.burger-widget').css({
      transform: 'translate(0px,0px)',
      transition: "all .5s"
    })
    if (window.matchMedia('(max-width: 375px)').matches) {
      $('.yellow-button').css({
        transform: 'translateX(0px)',
        transition: "all .5s"
      })
        $('.menu').css({
          width:" 0px",
          position: 'fixed',
          transition: "width .8s"
      });     
       $('.container-widget').css({
        position: 'relative',
    });
      
    }
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
    let width_carousel = $('.first-slide-show').width();
    let index = $(carousel).find('.caro-item.active1').index();
    let content = $(carousel).find('.carousel-holder');
    const length_item = $(carousel).find(".caro-item").length;

    if ($(this).attr('id') === 'carousel-next') {
      if (index < length_item - 1) {
        $(content).css('transform', `translateX(${(index + 1) * -width_carousel}px)`)
        $(carousel).find('.caro-item.active1').removeClass('active1')
        $(carousel).find('.caro-item').eq(index + 1).addClass('active1')

      } else {
        $(carousel).find('.caro-item.active1').removeClass('active1')
        $(carousel).find('.caro-item').eq(0).addClass('active1')
      }
      //prev
    } else {
      if (index > 0) {
        $(content).css('transform', `translateX(${(index - 1) * -width_carousel}px)`)
        $(carousel).find('.caro-item.active1').removeClass('active1')
        $(carousel).find('.caro-item').eq(index - 1).addClass('active1')
      } else {
        $(carousel).find('.caro-item.active1').removeClass('active1')
        $(carousel).find('.caro-item').eq(0).addClass('active1')
      }

    }

  }
  //auto carousel:
  function nextauto() {
    let carousel = $('.first-slide-show');
    let width_carousel = $('.first-slide-show').width();
    let index = $(carousel).find('.caro-item.active1').index();
    let content = $(carousel).find('.carousel-holder');
    const length_item = $(carousel).find(".caro-item").length;
    if (index < length_item - 1) {
      $(content).css('transform', `translateX(${(index + 1) * -width_carousel}px)`)
      $(carousel).find('.caro-item.active1').removeClass('active1')
      $(carousel).find('.caro-item').eq(index + 1).addClass('active1')
    } else {
      $(carousel).find('.caro-item.active1').removeClass('active1')
      $(carousel).find('.caro-item').eq(0).addClass('active1')
    }
  }
  setInterval(nextauto, 3000);

  //--------------date btn-------------
  $('.btn-date').click(function () {
    $(this).attr('type', 'date')

  })
})
function handelDate(e) {
  e.preventDefault();
  let from = new Date($('#date1').val());
  let to = new Date($('#date2').val()).getTime();
  let room = ($('#select').val());

  if (from, to) {
    $('.modal').css("opacity","1");
    $.ajax({
      type: 'GET',
      url: "./main.json",
      success: function (response) {
            response.map(item => {
            let entryOfDate = new Date(item.from).getTime();
            let dateOfDeparture = new Date(item.to).getTime();
            if (from >= entryOfDate && to <= dateOfDeparture && room==item.bed) {
              let inputTable = `<tr><td class="td">${item.from}</td><td class="td">${item.to}</td><td class="td">${item.room}</td><td class="td">${item.bed}</td></tr>`
              $('table').append(inputTable)
              $("tr:last").css( "backgroundColor", "#6fb586" )

            }else {
              let inputTable = `<tr><td class="td">${item.from}</td><td class="td">${item.to}</td><td class="td">${item.room}</td><td class="td">${item.bed}</td></tr>`
              $('table').append(inputTable)
              $("tr:last").css( "backgroundColor", "white" )
            }

          })
        }
        
      });
  }
}
$('#close-menu2').click(function (){
  $('table').empty();
  $('.modal').css("opacity","0");
  $
})
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

//auto
setInterval(carousel2,3000)
function carousel2() {
  let carousel = ('.Secound-slide-show');
  let width_carousel = $('.item-slide-show').width();
  let index = $(carousel).find('.item-slide-show.active2').index();
  let content = $(carousel).find('.slide-holder');
  const length_item = $(carousel).find(".item-slide-show").length;


    if (index < length_item - 1) {
      $(content).css('transform', `translateX(${(index + 1) * -width_carousel}px)`)
      $(carousel).find('.item-slide-show.active2').removeClass('active2')
      $(carousel).find('.item-slide-show').eq(index + 1).addClass('active2')

    } else {
      $(carousel).find('.item-slide-show.active2').removeClass('active2')
      $(carousel).find('.item-slide-show').eq(0).addClass('active2')
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
//auto
setInterval(carousel3,5000)
function carousel3() {
  $(".btn-car").find('.active-btn').removeClass('active-btn')
  let carousel = ('.slider');
  let width_carousel = $('.slider').width();
  let index = $(carousel).find('.slide.active3').index();
  let content = $(carousel).find('.itemse');
  const length_item = $(carousel).find(".slide").length;

    if (index < length_item - 1) {
      $(content).css('transform', `translateX(${(index + 1) * -width_carousel}px)`)
      $(carousel).find('.slide.active3').removeClass('active3')
      $(carousel).find('.slide').eq(index + 1).addClass('active3')
      $('.fa-circle').eq(index).addClass('active-btn')

    } else {
      $(carousel).find('.slide.active3').removeClass('active3')
      $(carousel).find('.slide').eq(0).addClass('active3')
      // $('.fa-circle')[index].addClass('active-btn')
  }
}
//-----------------contorol buttons-----------------
$('.fa-circle').click(function () {
  $(".btn-car").find('.active-btn').removeClass('active-btn')
  $(this).addClass('active-btn')
  let index=$(this).index()
  let carousel = ('.slider');
  let width_carousel = $('.slider').width();
  // let index = $(carousel).find('.slide.active3').index();
  let content = $(carousel).find('.itemse');
  const length_item = $(carousel).find(".slide").length;
    if (index < length_item - 1) {
      $(content).css('transform', `translateX(${(index + 1) * -width_carousel}px)`)
      $(carousel).find('.slide.active3').removeClass('active3')
      $(carousel).find('.slide').eq(index + 1).addClass('active3')

    } else {
      $(carousel).find('.slide.active3').removeClass('active3')
      $(carousel).find('.slide').eq(0).addClass('active3')
  }
  
})


