/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document) {

  'use strict';

  function mobileMenu() {
    $('#main-menu').removeClass('visually-hidden--focusable');
  }

  function desktopMenu() {
    $('#main-menu').addClass('visually-hidden--focusable');
  }

  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.my_custom_behavior = {
    attach: function (context, settings) {

      $(document).ready(function () {
        if (window.matchMedia('(max-width: 555px)').matches) {
          mobileMenu();
        }
      });
      $(window).resize(function () {
        if (window.matchMedia('(max-width: 555px)').matches) {
          mobileMenu();
        }
        else {
          desktopMenu();
        }
      });

      $('#main-menu').click(function (e) {
        e.preventDefault();
        $('.layout-swap__top').toggleClass('expanded');
      });

    }
  };

})(jQuery, Drupal, this, this.document);
