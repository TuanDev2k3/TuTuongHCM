let start_btn = document.querySelector('.start-btn')
let info_box = document.querySelector('.info-box')
let exitBtn = document.querySelector('.buttons .exit')
let continueBtn = document.querySelector('.buttons .continue')
let appQuiz = document.querySelector('.app')
let result = document.querySelector('.result-box')
let indexQuest = 0
let array = []

start_btn.querySelector('#chuong-1').addEventListener('click', function () {
    info_box.classList.remove('hide')
    indexQuest = 0;
    array = Chuong1;
})
start_btn.querySelector('#chuong-2').addEventListener('click', function () {
    info_box.classList.remove('hide')
    indexQuest = 0;
    array = Chuong2;
})
start_btn.querySelector('#chuong-3').addEventListener('click', function () {
    info_box.classList.remove('hide')
    indexQuest = 0;
    array = Chuong3;
})
start_btn.querySelector('#chuong-4').addEventListener('click', function () {
    info_box.classList.remove('hide')
    indexQuest = 0;
    array = Chuong4;
})
start_btn.querySelector('#chuong-5').addEventListener('click', function () {
    info_box.classList.remove('hide')
    indexQuest = 0;
    array = Chuong5;
})
start_btn.querySelector('#chuong-6').addEventListener('click', function () {
    info_box.classList.remove('hide')
    indexQuest = 0;
    array = Chuong6;
})


exitBtn.addEventListener('click', function () {
    info_box.classList.add('hide')
    start_btn.classList.remove('hide')
})

continueBtn.addEventListener('click', function () {
    info_box.classList.add('hide')
    start_btn.classList.add('hide')
    startQuiz()
})

//========== ques_Triet ========


let question = document.querySelector('.question')
let btnAns = document.querySelectorAll('.btn')
let correct = 0
let score = 0
let isSelect = true

function startQuiz() {
    appQuiz.classList.remove('hide')
    score = 0
    loadQuest(indexQuest)
}

function loadQuest(index) {
    question.innerHTML = `${index + 1}. ` + array[index].quest
    correct = array[index].correct
    btnAns.forEach((item, i) => {
        item.innerHTML = `${i + 1}. ` + array[index].answers[i]
        item.classList.remove('false', 'true')
    })
    isSelect = true
}

// Next Question
document.querySelector('#next-btn').addEventListener('click', () => {
    // isSelect = true la chua chon dap an ko dc next
    // if (isSelect) return

    if (indexQuest < array.length - 1) {
        indexQuest++
        loadQuest(indexQuest)
    }
    // Hien diem so
    else {
        result.classList.remove('hide')
        appQuiz.classList.add('hide')
        document.querySelector('.score span').innerHTML = `${score}/${array.length}`
    }
})
//  back Question
document.querySelector('#back-btn').addEventListener('click', () => {
    if (indexQuest > 0) {
        indexQuest--
        loadQuest(indexQuest)
        score--;
    }
    else
    {
        info_box.classList.remove('hide')
        appQuiz.classList.add('hide')
    }
    
})

// Check Answer true or false
btnAns.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (isSelect) {
            btnAns[correct].classList.add('true')
            if (correct == i) {
                score++
            }
            else {
                item.classList.add('false')
            }
        }
        isSelect = false
    })
})

// Thao tac voi Result Box
document.querySelector('.result-btn .exit').addEventListener('click', () => {
    result.classList.add('hide')
    start_btn.classList.remove('hide')
})

document.querySelector('.result-btn .continue').addEventListener('click', () => {
    result.classList.add('hide')
    indexQuest = 0;
    startQuiz()
})

// Serach cau hoi
let search_box = document.getElementById('search')
let btn_search = document.getElementById('btn-search')

btn_search.addEventListener('click', () =>{
    let value = search_box.value.trim();
    let valueInt = parseInt(value, 10);
    if (value && valueInt > 0 && valueInt <= array.length) 
    {
        indexQuest = valueInt - 1;
        loadQuest(indexQuest);
    }
    search_box.value = '';
})