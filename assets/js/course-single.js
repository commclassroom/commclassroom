    /**
     * Dark theme function 
     */
     let logoImg = document.getElementById("logo-img")
     let themeBtn = document.getElementById("chk")
     initialTheme()
 
     themeBtn.onclick = function () {
         if (localStorage.getItem("theme") === "light" || localStorage.getItem("theme") === null) {
             document.body.classList = "dark-theme"
             localStorage.setItem("theme", "dark")
             logoImg.src = '../assets/img/logo3.png'
             document.getElementById("title-section").style.color = "#ffffff"
         } else {
             document.body.classList = ""
             localStorage.setItem("theme", "light")
             logoImg.src = '../assets/img/logo2.png'
             document.getElementById("title-section").style.color = "#002387"
         }
     }
 
     function initialTheme() {
         switch (localStorage.getItem("theme")) {
             case "dark":
                 document.body.classList = "dark-theme"
                 logoImg.src = '../assets/img/logo3.png'
                 break
             case (null || "light"):
                 document.body.classList = ""
                 logoImg.src = '../assets/img/logo2.png'
                 break
         }
     }
 
     /**
      * Easy selector helper function
      */
     const select = (el, all = false) => {
         el = el.trim()
         if (all) {
             return [...document.querySelectorAll(el)]
         } else {
             return document.querySelector(el)
         }
     }
 
     /**
      * Easy event listener function
      */
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
 
     /**
      * Easy on scroll event listener 
      */
     const onscroll = (el, listener) => {
         el.addEventListener('scroll', listener)
     }
 
     /**
      * Navbar links active state on scroll
      */
     let navbarlinks = select('#navbar .scrollto', true)
     const navbarlinksActive = () => {
         let position = window.scrollY + 200
         navbarlinks.forEach(navbarlink => {
             if (!navbarlink.hash) return
             let section = select(navbarlink.hash)
             if (!section) return
             if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                 navbarlink.classList.add('active')
             } else {
                 navbarlink.classList.remove('active')
             }
         })
     }
     window.addEventListener('load', navbarlinksActive)
     onscroll(document, navbarlinksActive)
 
     /**
      * Scrolls to an element with header offset
      */
     const scrollto = (el) => {
         let header = select('#header')
         let offset = header.offsetHeight
 
         if (!header.classList.contains('header-scrolled')) {
             offset -= 16
         }
 
         let elementPos = select(el).offsetTop
         window.scrollTo({
             top: elementPos - offset,
             behavior: 'smooth'
         })
     }
 
     /**
      * Toggle .header-scrolled class to #header when page is scrolled
      */
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
 
     /**
      * Back to top button
      */
     let backtotop = select('.back-to-top')
     if (backtotop) {
         const toggleBacktotop = () => {
             if (window.scrollY > 100) {
                 backtotop.classList.add('active')
             } else {
                 backtotop.classList.remove('active')
             }
         }
         window.addEventListener('load', toggleBacktotop)
         onscroll(document, toggleBacktotop)
     }
 
     /**
      * Mobile nav toggle
      */
     on('click', '.mobile-nav-toggle', function (e) {
         select('#navbar').classList.toggle('navbar-mobile')
         this.classList.toggle('bi-list')
         this.classList.toggle('bi-x')
     })
 
     /**
      * Mobile nav dropdowns activate
      */
     on('click', '.navbar .dropdown > a', function (e) {
         if (select('#navbar').classList.contains('navbar-mobile')) {
             e.preventDefault()
             this.nextElementSibling.classList.toggle('dropdown-active')
         }
     }, true)
 
     /**
      * Remove navbar-mobile on resizing
      */
     $(window).resize(function () {
         if (window.innerWidth < 991) {
             $('.navbar-mobile').removeClass('navbar-mobile');
         }
     });
 
     /**
      * Scrool with ofset on links with a class name .scrollto
      */
     on('click', '.scrollto', function (e) {
         if (select(this.hash)) {
             e.preventDefault()
 
             let navbar = select('#navbar')
             if (navbar.classList.contains('navbar-mobile')) {
                 navbar.classList.remove('navbar-mobile')
                 let navbarToggle = select('.mobile-nav-toggle')
                 navbarToggle.classList.toggle('bi-list')
                 navbarToggle.classList.toggle('bi-x')
             }
             scrollto(this.hash)
         }
     }, true)
 
     /**
      * Scroll with ofset on page load with hash links in the url
      */
     window.addEventListener('load', () => {
         if (window.location.hash) {
             if (select(window.location.hash)) {
                 scrollto(window.location.hash)
             }
         }
     });