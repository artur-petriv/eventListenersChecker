Array.from(document.querySelectorAll("*")).reduce(function (pre, dom) {
  var clks = getEventListeners(dom).click;
  pre += clks ? clks.length || 0 : 0;
  return pre;
}, 0);
