function getOpacity(elem) {
  var filter = elem.style.filter;
  return filter ? (filter.indexOf('opacity=') >= 0 ? (parseFloat(filter.match(/opacity=(\d+)/)[1]) / 100) + '' : '') : elem.style.opacity;
}

window.onload = function() {
  assert(getOpacity(document.getElementById('opacity')) == '0.5', 'The opacity of the element has been obtained.');
}