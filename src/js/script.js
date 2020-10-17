;(function () {
  const btnMenu = document.querySelector('#btnMenu')
  const header = document.querySelector('#header')
  const fadeElements = document.querySelectorAll('.has-fade')

  btnMenu.addEventListener('click', function () {
    header.classList.toggle('open')

    if (header.classList.contains('open')) {
      document.body.classList.add('noScroll')

      fadeElements.forEach(function (element) {
        element.classList.remove('fade-out')
        element.classList.add('fade-in')
      })
    } else {
      document.body.classList.remove('noScroll')

      fadeElements.forEach(function (element) {
        element.classList.remove('fade-in')
        element.classList.add('fade-out')
      })
    }
  })
})()
