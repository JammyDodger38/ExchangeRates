const convertBtn = document.getElementById('convertBtn')
const convertBtn2 = document.getElementById('convertBtn2')

const fromUsd = document.getElementById('fromUsd')
const toRub = document.getElementById('toRub')
const fromRub = document.getElementById('fromRub')
const toUsd = document.getElementById('toUsd')
const rateUsd = document.getElementById('rateUsd')

let endpoint = 'latest'
let access_key = 'cf7bba23c66ab450d7b776be475cc8c7'

document.addEventListener('DOMContentLoaded', () => {
    exchangeRates().then(data => {
        rateUsd.innerHTML = `<b>Курс доллара:</b> ${(1/data.rates.USD*data.rates.RUB).toFixed(2)}`
    })
})

const exchangeRates = async () => {
    let rates = await fetch(`http://api.exchangeratesapi.io/v1/${endpoint}?access_key=${access_key}`)
    .then(res => res.json())
    
    return rates
} 
    

fromUsd.addEventListener('input', () => {
    fromUsd.value = fromUsd.value.replace(/[^0-9\.]+/g, "")
})

convertBtn.addEventListener('click', () => {
    exchangeRates().then(data => {
        toRub.value = ((fromUsd.value / data.rates.USD) * data.rates.RUB).toFixed(2)
    })
    
})
convertBtn2.addEventListener('click', () => {
    exchangeRates().then(data => {
        toUsd.value = ((fromRub.value / data.rates.RUB) * data.rates.USD).toFixed(2)
    })
})

