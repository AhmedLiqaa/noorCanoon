// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import 'core-js';
import 'regenerator-runtime/runtime';
import $ from 'jquery';
import {
  gsap,
  TimelineMax,
  TweenMax
} from 'gsap'
import {
  Link
} from '../_modules/link/link';

// $(() => {
//   new Link(); // Activate Link modules logic
//   console.log('Welcome to Yeogurt!');
// });


(function (_) {
  $(document).ready(function () {
    const toggleBtnMenu = _('.nav')
    const mainMenu = _('.menu')
    const btnSocial = _('.main-social')
    const hoverLinks = _('.js-hover-links')
    const menuItem = _('.js-menu-item')
    const infoItems = _('.js-infos-item')


    console.log(menuItem);

    function toggleMenu() {
      mainMenu.toggleClass('is-active'),

        //FOR OVERLAY FIXED DIV
        setTimeout(() => {
          toggleBtnMenu.toggleClass('is-active');
        }, 1e3);


    }

    function closeMenu() {
      mainMenu.removeClass('is-active');
      toggleBtnMenu.removeClass('is-active');
    }

    function menuItemFade() {
      var itemTransition = new TimelineMax();

      itemTransition.staggerFromTo(menuItem, 1.2, {
        opacity: 0,
        xPercent: -20
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


    function init() {

      toggleBtnMenu.on('click', function () {
        toggleMenu(),
          mainMenu.hasClass('is-active') && ((menuItemFade()), (infoItemsFade()))
      })
    }
    init();






    btnSocial.on('click', function () {
      _(this).toggleClass('is-open');
    })

    hoverLinks.hover(function () {

      hoverLinks.addClass('is-not-hover')
      _(this).removeClass('is-not-hover').addClass('is-hover')


    }, function () {
      hoverLinks.removeClass('is-not-hover is-hover')
    });


  });
})($);
