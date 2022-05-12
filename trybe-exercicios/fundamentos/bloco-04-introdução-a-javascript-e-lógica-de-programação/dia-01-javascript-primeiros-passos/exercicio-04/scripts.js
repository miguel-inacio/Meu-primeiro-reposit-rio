const notaDoCandidato = 13;
if (notaDoCandidato >= 80) {
  console.log("Parabéns,  você foi aprovada(o)!")
} else if (notaDoCandidato < 80 && notaDoCandidato >= 60) {
  console.log("Você está na nossa lista de espera")
}else if (notaDoCandidato < 60) {
  console.log("Você foi reprovada(o)")
}