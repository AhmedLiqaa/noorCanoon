// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import 'core-js';
import 'regenerator-runtime/runtime';
import $ from 'jquery';
import {
  Link
} from '../_modules/link/link';
import bootstrap from 'bootstrap'

// $(() => {
//   new Link(); // Activate Link modules logic
//   console.log('Welcome to Yeogurt!');
// });


(function (_) {
  $(document).ready(function () {
    const toggleMenu = _('.nav')
    const mainMenu = _('.menu')
    const btnSocial = _('.main-social')

    toggleMenu.on('click', function () {
      _(this).toggleClass('is-active')
      mainMenu.toggleClass('is-active')
    })

    btnSocial.on('click', function () {
      _(this).toggleClass('is-open');
    })



  });
})($);
