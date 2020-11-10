// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import 'core-js';
import 'regenerator-runtime/runtime';
import $ from 'jquery';
import Scrollbar from 'smooth-scrollbar';


(function (_) {
  $(document).ready(function () {
    const toggleBtnMenu = _('.nav')
    const mainMenu = _('.menu')
    const btnSocial = _('.main-social')
    const hoverLinks = _('.js-hover-links')
    const menuItem = _('.js-menu-item')
    const infoItems = _('.js-infos-item')
    const overlayDiv = _('.js-main-overlay')



    //MAIN TITLE ANIMATION START



    // START SIDE MENU ANIMATION JS 
    function toggleMenu() {
      mainMenu.toggleClass('is-active'),

        //FOR OVERLAY FIXED DIV
        setTimeout(() => {
          toggleBtnMenu.toggleClass('is-active'),
            overlayDiv.toggleClass('is-active')
        }, 1e3)

    }

    function closeMenu() {
      mainMenu.removeClass('is-active');
      toggleBtnMenu.removeClass('is-active');
      overlayDiv.removeClass('is-active')
    }

    function menuItemFade() {
      var itemTransition = new TimelineMax();


      itemTransition.staggerFromTo(menuItem, 1.2, {
        opacity: 0,
        xPercent: 20
      }, {
        opacity: 1,
        xPercent: 0,
        ease: "power3.out"
      }, .1, .5)
    }


    function infoItemsFade() {
      var infoItemstl = new TimelineMax();

      infoItemstl.staggerFromTo(infoItems, 1.2, {
        opacity: 0
      }, {
        opacity: 1,
        ease: "power3.out"
      }, .2, 1)
    }

    hoverLinks.hover(function () {

      hoverLinks.addClass('is-not-hover')
      _(this).removeClass('is-not-hover').addClass('is-hover')


    }, function () {
      hoverLinks.removeClass('is-not-hover is-hover')
    });

    function init() {

      toggleBtnMenu.on('click', function () {
          toggleMenu(),
            mainMenu.hasClass('is-active') && (menuItemFade(), infoItemsFade())
        }),
        overlayDiv.on('click', function () {
          closeMenu();
        })
    }
    init();

    // END SIDE MENU ANIMATION JS 


    btnSocial.on('click', function () {
      _(this).toggleClass('is-open');
    })




    const body = _('body')

    window.addEventListener('load', function () {
      body.addClass('is-loaded')
    })

  });
})($);


const windowHeight = $(window).outerHeight();

const animationController = new ScrollMagic.Controller({
  refreshInterval: 1,
});

console.log(animationController);

const scrollBar = Scrollbar.init(document.querySelector('.js-scroll-container'), {
  renderByPixels: !0
});



const scrollProgression = $(".scroll-progress__fill")

scrollBar.addListener(function (e) {
  var t = scrollBar.getSize().content.height,
    n = scrollBar.scrollTop / (t - windowHeight),
    r = Math.round(100 * n);

  (scrollProgression).css({
    height: r + '%'
  })
})

var projectsGridImg = $('.projects-grid__image-inner')

function projectsGridScroll(e) {
  var t = void 0 === t ? e : "#" + $(e).attr('id');
  var projectGridtl = new TimelineMax;
  projectGridtl.fromTo(e, 1, {
    y: -230,
    ease: 'power3.out '
  }, {
    y: 130,
    ease: 'power3.out'
  }, 0)

  const scene = new ScrollMagic.Scene({
      triggerElement: t,
      triggerHook: 1,
      duration: 4 * $(window).height()
    })
    .setTween(projectGridtl)
    .addTo(animationController)
}


projectsGridImg.length > 0 && projectsGridImg.each(function () {
  projectsGridScroll(this)
})




var mainTitle = $('.js-main-title');
var windowCenter = $(window).outerHeight() / 2;
var triggerButton = $('.mainscreen-trigger');
var mainScreen = $('.main-screen')
var animationInit = "";



function titleTransition() {

  var e = mainTitle.outerHeight();
  var titleTransitiontl = new TimelineMax;

  titleTransitiontl.fromTo(mainTitle, 1, {
    y: 0,
    ease: 'power3.out'
  }, {
    y: 3 * -e,
    ease: 'power3.out'
  }, 0)

  const scene = new ScrollMagic.Scene({
      triggerElement: ".mainscreen-trigger",
      duration: 3 * mainScreen.height(),
      triggerHook: .85,
    })
    .setTween(titleTransitiontl)
    .addTo(animationController)

}
titleTransition();


function titleOpacity() {
  mainTitle.outerHeight();
  const textOpacitytl = new TimelineMax;

  textOpacitytl.fromTo(mainTitle, 1, {
    opacity: 1,
    ease: 'power3.out'
  }, {
    opacity: 0,
    ease: 'power3.out'
  }, 0)
  const scene = new ScrollMagic.Scene({
      triggerElement: ".mainscreen-trigger",
      duration: mainScreen.height(),
      triggerHook: .5
    })
    .setTween(textOpacitytl)
    .addTo(animationController)
}
titleOpacity();

// function distroyAnimation() {
//   TweenMax.killTweensOf(mainTitle);
//   TweenMax.set(mainTitle, {
//     clearProps: 'all'
//   })
// }





function Resize() {
  var e = $(window).outerWidth();

  var t = mainTitle.outerHeight() / 2;
  mainTitle.css({
    top: windowCenter - t
  });

  scrollBar.addListener(function (e) {
    var r = e.offset.y + windowCenter - t;
    mainTitle.css({
      top: r
    })
  })
}
Resize();


function bannerImageScroll() {
  var bannerImgtl = new TimelineMax;

  bannerImgtl.fromTo('.js-mainscreen-col-img', {
    yPercent: 0,
    ease: 'power3.out'
  }, {
    yPercent: 50,
    ease: 'power3.out'
  }, 0)
  var scene = new ScrollMagic.Scene({
      triggerElement: '.main-screen',
      duration: 4 * $(window).outerHeight(),
      triggerHook: 0
    })
    .setTween(bannerImgtl)
    .addTo(animationController)
}
bannerImageScroll();

//   e < 768 && animationInit && (distroyAnimation(), animationInit = !1)
// }
// Resize();

// function initTitle() {
//   $(window).outerWidth > 767 ? animationInit = !1 : animationInit = !0;
//   onResize(),
//     $(window).resize(function () {
//       onResize();
//     })
// }

// initTitle();




function changeColor(){
  const scene = new ScrollMagic.Scene({
    triggerElement: '.push-contact',
    triggerHook: 0.5
  }).setClassToggle('body', "background-pink-white").addTo(animationController)
}
changeColor();