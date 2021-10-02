const currencyElementOne = document.querySelector('#currency-one');
const currencyElementTwo = document.querySelector('#currency-two');
const amountElementOne = document.querySelector('#amount-one');
const amountElementTwo = document.querySelector('#amount-two');
const rateElement = document.querySelector('#rate');
const swap = document.querySelector('#swap');

//Fetch exchange rates
const calculate = () => {
    const currency_one =  currencyElementOne.value;
    const currency_two =  currencyElementTwo.value;
    const amountOne =  amountElementOne.value;

    fetch("https://open.exchangerate-api.com/v6/latest")
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two] / data.rates[currency_one];
            rateElement.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            amountElementTwo.value = (amountElementOne.value * (rate)).toFixed(2);
        });
};

currencyElementOne.addEventListener('change', calculate);
currencyElementTwo.addEventListener('change', calculate);
amountElementOne.addEventListener('input', calculate);
amountElementTwo.addEventListener('input', calculate);

//Event listeners

calculate();