function fontSize (W) {
  ;
  (function (win, doc) {
    var rem = 100 / W * doc.documentElement.clientWidth
    doc.documentElement.style.fontSize = rem + 'px'
    win.onresize = function () {
      rem = 100 / W * doc.documentElement.clientWidth
      doc.documentElement.style.fontSize = rem + 'px'
    }
  })(window, document)
}
export {
  fontSize
}
