if (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'safari.css';
    document.head.appendChild(link);
} else {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'style.css';
    document.head.appendChild(link);
}

const timeElement = document.getElementById('time')
const targetDate = new Date("2023-11-10T00:00:00Z").getTime()

function setTime() {
    const currentDate = new Date().getTime()
    const timeLeft = targetDate - currentDate

    const days = `${Math.floor(timeLeft / (1000 * 60 * 60 * 24))}`
    const hours = `${Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`
    const minutes = `${Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))}`

    timeElement.innerHTML = `${days.length === 1 ? '0' + days : days} : ${hours.length === 1 ? '0' + hours : hours} : ${minutes.length === 1 ? '0' + minutes : minutes}`
}

setTime()

setInterval(() => {
    setTime()
}, 1000)


const experts = [
    {
        name: 'Денис Горин',
        description: 'Заместитель директора Института кибербезопасности и цифровых технологий РТУ МИРЭА, заведующий кафедрой КБ-3 «Безопасность программных решений», кандидат экономических наук, доцент.',
        src: './img/gorin.png'
    },
    {
        name: 'Вадим Горбатов',
        description: 'Руководитель студенческого объединения «Школа DevOps», разработчик на Go, багхантер, амбассадор Яндекса.',
        src: './img/gorbatov.png'
    },
    {
        name: 'Алексей Голобурдин',
        description: 'Основатель и руководитель компаний Диджитализируй! и Salesbeat, автор YouTube канала и курсов по разработке на Python.',
        src: './img/goloburdin.png'
    },
    {
        name: 'Кирилл Шмелёв',
        description: 'Инженер-программист отдела разработки средств защиты информации в компании АНСЕР ПРО.',
        src: './img/shmelev.png'
    },
    {
        name: 'Сергей Лесько',
        description: 'Ведущий разработчик Kaspersky Subscription Service, доктор технических наук, автор более 80 научных публикаций.',
        src: './img/lesko.png'
    },
    {
        name: 'Илья Порсев',
        description: 'Сертифицированный преподаватель Astra Linux, доцент кафедры КБ-3 «Безопасность программных решений», автор более 20 научных публикаций.',
        src: './img/porsev.png'
    },
    {
        name: 'Олег Лукьянчиков',
        description: 'Разработчик на C++/Qt, доцент кафедры КБ-3 «Безопасность программных решений», кандидат технических наук, автор более 30 научных публикаций.',
        src: './img/lukyanchinkov.png'
    },
    {
        name: 'Дмитрий Яценко',
        description: 'Сертифицированный тренер-преподаватель компании Arenadata.',
        src: './img/yachenko.png'
    },
    {
        name: 'Леонид Головин',
        description: 'Разработчик в Яндекс.Играх.',
        src: './img/golovin.png'
    },
    {
        name: 'Александр Дворянский',
        description: 'Директор департамента информационной безопасности и специальных решений Sitronics Group.',
        src: './img/dvoryanski.png'
    },
    {
        name: 'Никита Котиков',
        description: 'Специалист по пентесту и анализу защищённости финансового сектора в компании Rad Cop.',
        src: './img/kotikov.png'
    },
    {
        name: 'Сергей Лесько',
        description: 'Ведущий разработчик Kaspersky Subscription Service, доктор технических наук, автор более 80 научных публикаций.',
        src: './img/lesko.png'
    },
]

const activeExpertImg = document.getElementById('expertImgMobile')
activeExpertImg.style.transition = '.5s'
const activeExpertName = document.getElementById('expertNameMobile')
activeExpertName.style.transition = '.5s'
const activeExpertDescription = document.getElementById('expertDescriptionMobile')
activeExpertDescription.style.transition = '.5s'
let activeExpertCounter = 0


const prevExpertBtn = document.getElementById('leftArrow')
prevExpertBtn.addEventListener('click', () => {
    if (activeExpertCounter === 0) {
        activeExpertCounter = experts.length - 1
    } else {
        activeExpertCounter--

    }
    activeExpertImg.style.opacity = '0'
    activeExpertName.style.opacity = '0'
    activeExpertDescription.style.opacity = '0'
    setTimeout(() => {
        activeExpertName.innerText = experts[activeExpertCounter].name
        activeExpertDescription.innerText = experts[activeExpertCounter].description
        activeExpertImg.src = experts[activeExpertCounter].src
        activeExpertImg.style.opacity = '1'
        activeExpertName.style.opacity = '1'
        activeExpertDescription.style.opacity = '1'
    }, 200)
})


const nextExpertBtn = document.getElementById('rightArrow')
nextExpertBtn.addEventListener('click', () => {
    if (activeExpertCounter === experts.length - 1) {
        activeExpertCounter = 0
    } else {
        activeExpertCounter++
    }
    activeExpertImg.style.opacity = '0'
    activeExpertName.style.opacity = '0'
    activeExpertDescription.style.opacity = '0'
    setTimeout(() => {
        activeExpertName.innerText = experts[activeExpertCounter].name
        activeExpertDescription.innerText = experts[activeExpertCounter].description
        activeExpertImg.src = experts[activeExpertCounter].src
        activeExpertImg.style.opacity = '1'
        activeExpertName.style.opacity = '1'
        activeExpertDescription.style.opacity = '1'
    }, 200)
})


const partners = [
    {
        img: './img/arenadata.png',
        description: 'Ведущий российский разработчик платформ сбора и хранения данных для компаний, которые хотят изменить бизнес с помощью цифровизации процессов и сложной аналитики, основанной на использовании Big Data.',
    },
    {
        img: './img/yandex.png',
        description: 'Одна из крупнейших IT-компаний в России. Мы развиваем самую популярную в стране поисковую систему и создаем сервисы, которые помогают людям в повседневных делах. С их помощью можно искать информацию в интернете, слушать музыку, выбирать товары и места, заказывать еду, перемещаться по городу и делать многое другое. Яндекс предлагает также продукты для бизнеса.',
    },
    {
        img: './img/answerPro.png',
        description: 'Аккредитованная ФСБ испытательная лаборатория, c 2006 года занимается деятельностью, связанной с разработкой и поддержкой программного обеспечения, производством микроэлектроники, поставкой технических и программных средств безопасности, тематическими исследования средств защиты информации.',
    },
    {
        img: './img/sitronics.png',
        description: 'Многопрофильная российская компания с обширным опытом в цифровизации стратегических отраслей экономики и реализации крупномасштабных проектов для бизнеса и государства. Является производителем высокотехнологичного оборудования и разработчиком программных решений.',
    },
    {
        img: './img/devOpsSchool.png',
        description: 'Школа DevOps реализует в Институте кибербезопасности и цифровых технологий научно-исследовательскую и образовательную деятельность в следующих направлениях: проведение факультативных курсов, мастер-классов, конференций, командных соревнований.',
    },
    {
        img: './img/digitalize.png',
        description: 'Мы разрабатываем комплексные IT системы для вашего бизнеса, оцифровываем все бизнес-процессы, переводя их в единую информационную систему. Это делает управление компанией прозрачным и позволяет собственникам и руководству принимать решения, опираясь на реальные цифровые показатели — а не на домыслы и составленные вручную отчёты.',
    },
    {
        img: './img/kaspersky.png',
        description: 'Мы разрабатываем комплексные IT системы для вашего бизнеса, оцифровываем все бизнес-процессы, переводя их в единую информационную систему. Это делает управление компанией прозрачным и позволяет собственникам и руководству принимать решения, опираясь на реальные цифровые показатели — а не на домыслы и составленные вручную отчёты.',
    },
    {
        img: './img/communigate.png',
        description: 'Мы разрабатываем самые эффективные и безопасные в мире технологии унифицированных коммуникаций, обеспечивая предприятиям любого размера превосходные возможности в сфере связи и взаимодействия. ',
    },
]

const activePartnerImg = document.getElementById('partnerImgMobile')
activePartnerImg.style.transition = '.5s'
const activePartnerDescription = document.getElementById('partnerDescriptionMobile')
activePartnerDescription.style.transition = '.5s'
let activePartnerCounter = 0


const prevPartnerBtn = document.getElementById('partnerLeftArrow')
prevPartnerBtn.addEventListener('click', () => {
    if (activePartnerCounter === 0) {
        activePartnerCounter = partners.length - 1
    } else {
        activePartnerCounter--

    }
    activePartnerImg.style.opacity = '0'
    activePartnerDescription.style.opacity = '0'
    setTimeout(() => {
        activePartnerDescription.innerText = partners[activePartnerCounter].description
        activePartnerImg.src = partners[activePartnerCounter].img
        activePartnerImg.style.opacity = '1'
        activePartnerDescription.style.opacity = '1'
    }, 200)
})


const nextPartnerBtn = document.getElementById('partnerRightArrow')
nextPartnerBtn.addEventListener('click', () => {
    if (activePartnerCounter === partners.length - 1) {
        activePartnerCounter = 0
    } else {
        activePartnerCounter++

    }
    activePartnerImg.style.opacity = '0'
    activePartnerDescription.style.opacity = '0'
    setTimeout(() => {
        activePartnerDescription.innerText = partners[activePartnerCounter].description
        activePartnerImg.src = partners[activePartnerCounter].img
        activePartnerImg.style.opacity = '1'
        activePartnerDescription.style.opacity = '1'
    }, 200)
})

const menuBtn = document.getElementById('mobileMenuIcon')
const menu = document.getElementById('mobileMenu')
const closeMenuContainer = document.getElementById('closeMenuContainer')



menuBtn.addEventListener('click', () => {
    menu.style.transition = '.2s'
    closeMenuContainer.style.display = 'block'
    menu.style.display = 'flex'
    setTimeout(() => {
        menu.style.opacity = '1'
    }, 1)

})

closeMenuContainer.addEventListener('click', () => {
    menu.style.opacity = '0'
    closeMenuContainer.style.display = 'none'

    setTimeout(() => {
        menu.style.display = 'none'
    },200)

})



const questionsBodies = [
    {
        question: 'Как принять участие участие в хакатоне?',
        answer: 'Для всех участников финального этапа хакатона пройдут соревнования по информационной безопасности в формате Jeopardy CTF, где командам предстоит соперничество в решении практических заданий по нахождению уязвимостей, реверс-инжинирингу, разведке по открытым источникам, криптографии, стеганографии и расследованию компьютерных инцидентов.'
    },
    {
        question: 'Как принять участие участие в хакатоне?',
        answer: 'Для всех участников финального этапа хакатона пройдут соревнования по информационной безопасности в формате Jeopardy CTF, где командам предстоит соперничество в решении практических заданий по нахождению уязвимостей, реверс-инжинирингу, разведке по открытым источникам, криптографии, стеганографии и расследованию компьютерных инцидентов.'
    },
    {
        question: 'Как принять участие участие в хакатоне?',
        answer: 'Для всех участников финального этапа хакатона пройдут соревнования по информационной безопасности в формате Jeopardy CTF, где командам предстоит соперничество в решении практических заданий по нахождению уязвимостей, реверс-инжинирингу, разведке по открытым источникам, криптографии, стеганографии и расследованию компьютерных инцидентов.'
    },
    {
        question: 'Как принять участие участие в хакатоне?',
        answer: 'Для всех участников финального этапа хакатона пройдут соревнования по информационной безопасности в формате Jeopardy CTF, где командам предстоит соперничество в решении практических заданий по нахождению уязвимостей, реверс-инжинирингу, разведке по открытым источникам, криптографии, стеганографии и расследованию компьютерных инцидентов.'
    },
    {
        question: 'Как принять участие участие в хакатоне?',
        answer: 'Для всех участников финального этапа хакатона пройдут соревнования по информационной безопасности в формате Jeopardy CTF, где командам предстоит соперничество в решении практических заданий по нахождению уязвимостей, реверс-инжинирингу, разведке по открытым источникам, криптографии, стеганографии и расследованию компьютерных инцидентов.'
    },
]


const questions = document.getElementsByClassName('question')
const answers = document.getElementsByClassName('answer')
const activeQuestions = [false, false, false, false, false]
for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', () => {
        answers[i].style.transition = '.2s'

        if (!activeQuestions[i]) {
            activeQuestions[i] = true
            questions[i].style.height = '20rem'
            answers[i].style.opacity = '0'


            answers[i].innerText = questionsBodies[i].answer
            answers[i].style.display = 'block'

            setTimeout(() => {
                answers[i].style.height = '15rem'
                answers[i].style.opacity = '1'

            }, 200)
        } else {
            activeQuestions[i] = false
            questions[i].style.height = '5rem'
            answers[i].style.opacity = '0'
            answers[i].style.height = '0'



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
        closeMenuContainer.style.display = 'none'
        setTimeout(() => {
            menu.style.display = 'none'
        },200)
    })
}

