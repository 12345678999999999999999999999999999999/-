setTimeout(() => {
    alert('сама уничтожени начнется через ')
}, 2000);
setTimeout(() => {
    alert('1..')
}, 4000);
setTimeout(() => {
    alert('2..')
}, 6000);
setTimeout(() => {
    alert('3..')
}, 8000);

let a = document.getElementById('a')
let b = document.getElementById('b')

let chaingA = () => {
    a.style.color='red'
    a.style.transform='rotate(360deg)'
    a.style.transition='2s'
    a.style.backgroundColor='blue'
    document.body.style.backgroundColor='yellow'
    document.body.style.transition='122s'
}


let chainga = () => {
    b.style.color='blue'
    b.style.transform='rotate(360deg)'
    b.style.transition='4s'
    b.style.backgroundColor='red'
    
    document.body.style.backgroundColor='green'
    document.body.style.transition='4s'
}

setTimeout(() => {
    chaingA()
}, 11000);

setTimeout(() => {
    chainga()
}, 12000);