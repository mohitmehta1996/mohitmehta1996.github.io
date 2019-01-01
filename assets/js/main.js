jQuery(document).ready(function($) {
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {
        $('.level-bar-inner').each(function() {
            var itemWidth = $(this).data('level');
            $(this).animate({
                width: itemWidth
            }, 800);
        });
    });
    
    $('.level-label').tooltip();

    var typed = $(".typed");

    $(function() {
      typed.typed({
        strings: ["Mohit Mehta.", "Developer."," Designer.", "Freelancer."],
        typeSpeed: 100,
        loop: true,
      });
    });
  

});