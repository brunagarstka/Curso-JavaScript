var idade = 16
var tempoDisponivel = 30
    if (idade >= 18) {
        if (tempoDisponivel >= 60) {
            console.log("Você pode fazer um treino completo de resistência e cardio.");
        } else if (tempoDisponivel >= 30) {
            console.log("Você pode fazer um treino de resistência rápido.");
        } else {
            console.log("Você pode fazer um treino curto de cardio.");
        }
    } else {
        console.log("Você é menor de idade para treinar sozinho.");
    }
