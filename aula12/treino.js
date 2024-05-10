var tempoDisponivel = 30
var idade = 19
console.log(`Sua idade é ${idade}, e tem ${tempoDisponivel} minutos para treinar.`)
if ( idade >= 18){
     if ( tempoDisponivel <= 45) {
    console.log('Você pode fazer um treino rápido')
    } else if ( tempoDisponivel <= 75) {
     console.log('Você pode fazer um treino completo de resistência e cardio')
    } else {
    console.log('Você não tem tempo suficiente para treinar')
    }
} else {
    console.log('Você é menor de idade para treinar sozinho')
}
