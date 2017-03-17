/*global $*/


$(document).ready(function(){
  
// Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });

 // Tooltips
    $(function () {
      $('#TobaccoLace').tooltip();
      });
    $(function () {
      $('#Sandalwood').tooltip();
      });
    $(function () {
      $('#VanillaLemon').tooltip();
      });
    $(function () {
      $('#Cinnamon').tooltip();
      });  
      
  // IE10 viewport hack for Surface/desktop Windows 8 bugs
  // Copyright 2014-2015 Twitter, Inc.
  // Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(
     document.createTextNode(
      '@-ms-viewport{width:auto!important}'
      )
    );
    document.querySelector('head').appendChild(msViewportStyle);
  }


});