var agora = new Date()
var hora = agora.getHours()
console.log(`São exatamente ${hora}h.`)
if (hora >= 5){
    if (hora <= 12) {
    console.log('Bom Dia')
    } else if (hora <= 18) {
    console.log('Boa Tarde')
    } else if (hora <= 23) {
    console.log('Boa Noite')
    } else {
    console.log('Boa madrugada')
    }
} else {
  console.log('Boa madrugada')
}
