var typey = require('get-object-type')

module.exports = function (el) {
  function resize () {
    switch (typey(el)) {
      case 'HTMLCollection':
        for (var i = 0; i < el.length; i++) {
          el[i].style.height = window.innerHeight + 'px'
          el[i].style.width = window.innerWidth + 'px'
        }
        break
      case 'HTMLCanvasElement':
        el.height = window.innerHeight + 'px'
        el.width = window.innerWidth + 'px'
        break
      default:
        el.style.height = window.innerHeight + 'px'
        el.style.width = window.innerWidth + 'px'
        break
    }
  }

  window.addEventListener('resize', resize, false)

  resize()
}
