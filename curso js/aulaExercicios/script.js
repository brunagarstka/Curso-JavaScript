
//var agora = new Date()
//var hora = agora.getHours()
let hora = 9
let d1 = window.document.querySelector('div#d1')
d1.innerHTML = `Agora são ${hora} horas.`
let corpo = window.document.querySelector('body')
 if (hora < 12) {
    corpo.style.background = 'linear-gradient(#fdffb8, #ddb892)'
 } else if (hora < 18) {
    corpo.style.background = 'linear-gradient(#9c6644, #7f5539)'
 } else if (hora > 18) {
    corpo.style.background = 'linear-gradient(#001845, black)'
 } else {
    window.alert('ERRO')
 }