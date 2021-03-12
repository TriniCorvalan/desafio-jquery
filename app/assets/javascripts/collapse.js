$(document).on('turbolinks:load', function() {

  $('.btn').on('click', function() {
    $('.card').slideToggle('slow');
  });
  
});
