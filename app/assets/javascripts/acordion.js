$(document).on('turbolinks:load', function() {
  $('.collapse').hide();
  $('.collapse.show').show();

  $('.btn').on('click', function () {
    var div = $($(this).data('target'));

    if (div.is('visible')) {
      div.slideUp('fast');
    } else {
      $('.collapse').slideUp('fast');
      div.slideDown('fast');
    }
  });
});
