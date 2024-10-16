import {apiKey} from "./apiKey.js";
document.querySelector('button').addEventListener('click', getConversion)
// https://v6.exchangerate-api.com/v6/

function getConversion(){
    const startCurr = document.querySelector('#start-curr').value;
    const targetCurr = document.querySelector('#target-curr').value;
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${startCurr}`;
    
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            // console.log(data)
            console.log(data.conversion_rates[targetCurr])
            document.querySelector('#conversion').innerText = `1 ${startCurr} = ${data.conversion_rates[targetCurr]} ${targetCurr}`
        })
        .catch(err => {
        console.log(`error ${err}`)
    });
}
