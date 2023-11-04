/*=====Menu show y hidden====*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*=====Menu Show====*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*=====Menu Hidden====*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*===Remove menu mobile===*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav_link we remove the show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*============Skills==========*/
const skillsContent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills_close'
    }
    if (itemClass === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*============Qualification==========*/
const tabs = document.querySelectorAll('[data-target'),
    tabContents = document.querySelectorAll('[data-content')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tab.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

/*============Services==========*/
const modalViews = document.querySelectorAll('.services_modal'),
    modalBtns = document.querySelectorAll('.services_button'),
    modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*===============Portfolio swiper================*/
let swiper = new Swiper(".portfolio_container", {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});