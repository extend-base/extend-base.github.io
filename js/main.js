$(document).ready(function() {
  var $modalOpener = $('.modal-opener');
  var $menuOpener = $('#menu-opener');

  $menuOpener.on('click', function(e) {
    e.preventDefault();
    $('.ui.labeled.icon.sidebar').sidebar('toggle');
  });

  $modalOpener.on('click', function() {
    $('.ui.modal').modal('show');
  });

  // Highlight.js
  hljs.initHighlightingOnLoad();
});