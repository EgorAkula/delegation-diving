let elem1 = document.querySelector('#elem1')
let elem2 = document.querySelector('#elem2')
let elem3 = document.querySelector('#elem3')

// Метод event.stopPropagation() - остановка всплытия
// Метод event.stopImmediatePropagation() - полностью останавливает обработку события

elem1.addEventListener('click', ()=> {
    console.log('зеленый - погружение')
}, true)
elem1.addEventListener('click', ()=> {
    console.log('зеленый - всплытие')
}, false)
elem2.addEventListener('click', ()=> {
    console.log('голубой - погружение')
}, false)
elem2.addEventListener('click', ()=> {
    console.log('голубой - всплытие')
})
elem3.addEventListener('click', ()=> {
    console.log('красный - погружение')
}, true)
elem3.addEventListener('click', ()=> {
    console.log('красный - всплытие')
}, false)