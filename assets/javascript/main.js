$(document).ready(function(){
    $('.pushpin').pushpin();
    $('.collapsible').collapsible();
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();
    $('.tooltipped').tooltip();
  });

$('.pushpin-demo-nav').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });

  $('.smooth-goto').on('click', function() {  
    $('html, body').animate({scrollTop: $(this.hash).offset().top + 0}, 1000);
    return false;
});

