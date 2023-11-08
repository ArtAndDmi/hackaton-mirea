


document.getElementById('participateBtn').addEventListener('click', function () {
    window.location.href = 'https://www.yandex.com'
})
document.getElementById('footerGreenBtn').addEventListener('click', function () {
    window.location.href = 'https://www.yandex.com'
})
document.getElementById('footerGreenBtn').addEventListener('click', function () {
    // Откроем новую ссылку в текущем окне браузера
    window.location.href = 'https://www.yandex.com'
})


const timeElements = document.getElementsByClassName('timeValue')
const targetDate = new Date("2023-11-24T23:00:00Z").getTime()

function setTime() {
    const currentDate = new Date().getTime()
    const timeLeft = targetDate - currentDate

    const days = `${Math.floor(timeLeft / (1000 * 60 * 60 * 24))}`
    const hours = `${Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`
    const minutes = `${Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))}`

    timeElements[0].innerHTML = ` ${days.length === 1 ? '0' + days : days} <p class="timeLabel">Дней</p>`
    timeElements[1].innerHTML = ` ${hours.length === 1 ? '0' + hours : hours} <p class="timeLabel">Часов</p>`
    timeElements[2].innerHTML = ` ${minutes.length === 1 ? '0' + minutes : minutes} <p class="timeLabel">Минут</p>`


}


setTime()

setInterval(() => {
    setTime()
}, 1000)



const menuBtn = document.getElementById('mobileMenuIcon')
const menu = document.getElementById('mobileMenu')
// const closeMenuContainer = document.getElementById('closeMenuContainer')

let isCross = false

menuBtn.addEventListener('click', () => {
    const firstLine = document.getElementById('mobileMenuIconPath1')
    const secondLine = document.getElementById('mobileMenuIconPath2')
    const thirdLine = document.getElementById('mobileMenuIconPath3')
    firstLine.transition = '.2s'
    secondLine.style.transition = '.2s'
    thirdLine.style.transition = '.2s'
    document.body.style.overflow = 'hidden'

    menuBtn.style.transition = '.2s'
    if (!isCross) {
        firstLine.setAttribute('d', 'M10 18H26')
        thirdLine.setAttribute('d', 'M18 10 L18 26')


        menuBtn.style.transform = 'rotate(45deg)'
        isCross = true
        menu.style.display = 'flex'
        setTimeout(() => {
            menu.style.opacity = '1'
        }, 1)
    } else {
        firstLine.setAttribute('d', 'M10 12H26')
        thirdLine.setAttribute('d', 'M10 24H26')

        menuBtn.style.transform = 'rotate(0deg)'
        isCross = false
        document.body.style.overflow = 'auto'
        menu.style.opacity = '0'
        setTimeout(() => {
            menu.style.display = 'none'
        }, 200)
    }




})



const questionsBodies = [
    {
        question: 'Могут ли участвовать студенты не из Москвы?',
        answer: 'Да, могут. Иногородним студентам мы предоставляем проживание в Москве на время проведения финала хакатона.'
    },
    {
        question: 'Сколько команд будет участвовать в финале?',
        answer: 'По итогам отборочного этапа в финал хакатона пройдут 25 команд студентов и 10 команд школьников.'
    },
    {
        question: 'Школьники и студенты соревнуются независимо?',
        answer: 'Команды студентов вузов и колледжей соревнуются в одном рейтинге, а школьники в другом.'
    },
    {
        question: 'Когда завершается регистрация новых участников?',
        answer: 'Зарегистрировать свою команду вы сможете до 24 ноября 23:00, а приём решений отборочного этапа идёт до 27 ноября 23:00'
    },
    {
        question: 'Можно ли изменить состав команды?',
        answer: 'Изменить состав команды можно до окончания приёма решений отборочного этапа - 27 ноября 23:00'
    },

]


const questions = document.getElementsByClassName('question')
const answers = document.getElementsByClassName('answer')
const activeQuestions = [false, false, false, false, false]
for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', () => {
        answers[i].style.transition = '.2s'
        const svg = questions[i].children[0].children[1]
        const vertLine = svg.children[0]
        const horLine = svg.children[1]
        if (!activeQuestions[i]) {
            activeQuestions[i] = true

            questions[i].style.height = window.innerWidth > 767 ? '8rem' : '10rem'
            answers[i].style.opacity = '0'
            svg.style.transform = 'rotate(90deg)'
            vertLine.style.display = 'none'

            answers[i].innerText = questionsBodies[i].answer
            answers[i].style.display = 'block'

            setTimeout(() => {
                answers[i].style.height = '13rem'
                answers[i].style.opacity = '1'

            }, 1)
        } else {
            activeQuestions[i] = false
            questions[i].style.height = window.innerWidth > 767 ? '5rem' : '5.5rem'
            answers[i].style.opacity = '0'
            answers[i].style.height = '0'
            svg.style.transform = 'rotate(0deg)'
            vertLine.style.display = 'block'


            setTimeout(() => {
                answers[i].innerText = questionsBodies[i].answer
                answers[i].style.display = 'none'

                // answers[i].style.opacity = '1'

            }, 200)
        }

    })
}

const mobileMenuItems = document.getElementsByClassName('mobileMenuItem')
for (let href of mobileMenuItems) {
    href.addEventListener('click', () => {
        menu.style.opacity = '0'

        const firstLine = document.getElementById('mobileMenuIconPath1')
        const secondLine = document.getElementById('mobileMenuIconPath2')
        const thirdLine = document.getElementById('mobileMenuIconPath3')
        firstLine.transition = '.2s'
        secondLine.style.transition = '.2s'
        thirdLine.style.transition = '.2s'
        menuBtn.style.transform = 'rotate(0deg)'
        firstLine.setAttribute('d', 'M10 12H26')
        thirdLine.setAttribute('d', 'M10 24H26')
        document.body.style.overflow = 'auto'
        isCross = false
        //closeMenuContainer.style.display = 'none'
        setTimeout(() => {
            menu.style.display = 'none'
        }, 200)
    })
}






window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
        let swiper

        breakpoint = window.matchMedia(breakpoint)

        const enableSwiper = function (className, settings) {
            swiper = new Swiper(className, settings)

            if (callback) {
                callback(swiper)
            }
        }

        const checker = function () {
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings)
            } else {
                if (swiper !== undefined) swiper.destroy(true, true)
                return
            }
        }

        breakpoint.addEventListener('change', checker)
        checker()
    }

    const someFunc = (instance) => {
        if (instance) {
            instance.on('slideChange', function (e) {
                console.log('*** mySwiper.activeIndex', instance.activeIndex)
            })
        }
    }

    resizableSwiper(
        '(max-width: 1280px)',
        '.slider-1',
        {
            loop: true,
            spaceBetween: 32,
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                prevEl: '#leftArrow',
                nextEl: '#rightArrow',
            },
        },
        someFunc
    )

    resizableSwiper(
        '(max-width: 1280px)',
        '.slider-2',
        {
            loop: true,
            spaceBetween: 32,
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination2',
                clickable: true,
            },
            navigation: {
                prevEl: '#partnerLeftArrow',
                nextEl: '#partnerRightArrow',
            },
        },
        someFunc
    )



})



