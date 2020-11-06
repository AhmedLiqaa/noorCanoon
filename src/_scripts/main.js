// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import 'core-js';
import 'regenerator-runtime/runtime';
import $ from 'jquery';
import Scrollbar from 'smooth-scrollbar';
import { TimelineMax } from 'gsap';


(function (_) {
  $(document).ready(function () {
    const toggleBtnMenu = _('.nav')
    const mainMenu = _('.menu')
    const btnSocial = _('.main-social')
    const hoverLinks = _('.js-hover-links')
    const menuItem = _('.js-menu-item')
    const infoItems = _('.js-infos-item')
    const overlayDiv = _('.js-main-overlay')
    const mainTitle = _('.js-main-title')
    const mainScreen = _('.main-screen')
    const windowCenter = _(window).outerHeight() / 2;
    const mainScreenTrigger = _('.mainscreen-trigger')



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


    Scrollbar.init(document.querySelector('.js-scroll-container'), {
      renderByPixels: !0
    });

    const body = _('body')
    console.log(body)

  window.addEventListener('load', function(){
    body.addClass('is-loaded')
  })

    

  // function gridParallaxProjects(e) {
  //   const controller = new ScrollMagic.Controller({
  //     rrefreshInterval: 1
  //   })
  //   var t = void 0 === t ? e : _(e).attr('id');
  //   const projectsGridImageScrolltl = new TimelineMax;

  //   projectsGridImageScrolltl.fromTo(e,1, {
  //     y: -230,
  //     ease: 'power3.out'
  //    }, {
  //     y: 130,
  //     ease: 'power3.out'
  //   }, 0)
  //   const projectScene = new ScrollMagic.Scene({
  //     triggrtElement: t,
  //     triggreHook: 1,
  //     duration: 4 * _(window).height()
      
  //   })

  //   .setTween(projectsGridImageScrolltl)
  //   .addTo(controller)
  //   projectScene.addIndicators();
  // }

  // _('.projects-grid__image-inner').length > 0 && _('.projects-grid__image-inner').each(function(){
  //   gridParallaxProjects(this);
  // })

  });
})($);
