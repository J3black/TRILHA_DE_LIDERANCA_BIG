(function($){

  var exports = {};

  var options = {};

  var openContent = function(){
    $('.open-content-1').click(function () {
      $(this).toggleClass('is-active');
      $('.content-hidden-1').toggleClass('is-active');
    });
    $('.open-content-2').click(function () {
    	$(this).toggleClass('is-active');
      $('.content-hidden-2').toggleClass('is-active');
    });
  };

  var init = function(){
  	openContent();
  }();

  return exports;

})(jQuery);