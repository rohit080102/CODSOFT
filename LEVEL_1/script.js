const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
        if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
            selectEl.addEventListener(type, listener)
        }
    }
}



on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
})

let selectHeader = select('#header')
if (selectHeader) {
    const headerScrolled = () => {
        if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled')
        } else {
            selectHeader.classList.remove('header-scrolled')
        }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
}

on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
    }
}, true)