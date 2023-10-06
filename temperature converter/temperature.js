let Celsiusinput = document.querySelector('#Celsius > input')
let Fahrenheitinput = document.querySelector('#Fahrenheit > input')
let Kelvininput = document.querySelector('#Kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber(number) {
    return Math.round(number * 100) / 100
}

Celsiusinput.addEventListener('input', function(){
    let cTemp = parseFloat(Celsiusinput.value)
    let fTemp = (cTemp * (9 / 5)) + 32
    let kTemp = cTemp + 273.15

    Fahrenheitinput.value = roundNumber(Ftemp)
    Kelvininput.value = roundNumber(ktemp)
})

Fahrenheitinput.addEventListener('input', function(){
    let fTemp = parseFloat(Fahrenheitinput.value)
    let cTemp = (fTemp - 32) + (5 / 9)
    let kTemp = (fTemp - 32) * (5 / 9) + 273.15

    Celciusinput.value = roundNumber(ctemp)
    Kelvininput.value = roundNumber(Ktemp)
})

kelvininput.addEventListener('input', function(){
    let kTemp = parseFloat(Kelvininput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9 / 5) + 32

    Celciusinput.value = roundNumber(ctemp)
    Fahrenheitinput.value = roundNumber(ftemp)
})

btn.addEventListener('click', () => {
    CelSiusinput.value = ""
    Fahrenheitinput.value = ""
    Kelvininput.value = ""

})