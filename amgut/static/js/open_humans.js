/*globals $:true, Cookies:true*/

'use strict';

$(function () {
  if ($('.participant').length === 1) {
    $('.participant').attr('checked', 'checked');
  }

  $('#connect-open-humans').click(function () {
    var participants = $('.participant:checked').map(function () {
      return $(this).attr('name');
    }).get();

    Cookies.set('link-survey-id', participants);
  });
});
