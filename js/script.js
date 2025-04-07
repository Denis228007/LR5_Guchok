//scroll
$(document).ready(function () {
    $('.nav-link').click(function (e) {
      e.preventDefault();
      const target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top - 70
      }, 700);
    });
  });
  
  //card additional
  $(document).ready(function () {
    
    $('.btn-primary').click(function () {
      var cardBody = $(this).closest('.card-body');
      cardBody.find('.card-text').toggleClass('d-none');
      $(this).text($(this).text() === 'Дізнатися більше' ? 'Згорнути' : 'Дізнатися більше');
    });
  });
  
  $(document).ready(function() {
    
    $('[data-bs-toggle="popover"]').popover();

    $('[data-bs-toggle="popover"]').on('shown.bs.popover', function () {
      var that = $(this);
      setTimeout(function() {
        that.popover('hide');
      }, 2000); 
    });
  });

  //additional grid
  $(document).ready(function() {
    $(".advice").click(function() {
      
      var additionalInfo = $(this).find(".additional-info");
      
      
      additionalInfo.slideToggle();
      
      
      $(this).toggleClass("active");
    });
  });
  
  
  