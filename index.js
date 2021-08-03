alert("Welcome to Conventor")
let uzs = prompt("Input 'sum' : ")

let usd = uzs / 10654
let eur = uzs / 12674

let usd1 = Math.round(usd)
let eur1 = Math.round(eur)
alert(`Sum to dollar:
${uzs} sum = ${usd} $ (approx  ${usd1} $)`)
alert(`Sum to euro: 
${uzs} sum = ${eur} € (approx  ${eur1} €)`)