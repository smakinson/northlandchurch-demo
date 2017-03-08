// JS Goes here - ES6 supported

$('#search-bar-btn').click(() => {
  $('#search-bar').removeClass('closed');
  return false;
});

$('#search-bar-close-btn').click(() => {
  $('#search-bar').addClass('closed');
  return false;
});

