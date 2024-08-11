import {process} from '/env'



const setupTextarea = document.getElementById('setup-textarea')
const setupInputContainer = document.getElementById('setup-input-container')
const movieBossText = document.getElementById('movie-boss-text')

const apiKey = procedd.env.OPENAI_API_KEY
// const apiKey = "sk-01VF3qwE4goLocscvOy-jJuNnFxIhd_dQqx8rSMizuT3BlbkFJkEUJ369yBUqdH-2qMKYTXROX02ZBlkG8-y65Gr7Q8A"
const url = 'https://api.openai.com/v1/completions'

document.getElementById("send-btn").addEventListener("click", () => {

// if (setupTextarea.value) {
    setupInputContainer.innerHTML = `<img src="images/loading.svg" class="loading" id="loading">`
    movieBossText.innerText = `Ok, just wait a second while my digital brain digests that...`
// }
fetchBotReply()
})

function fetchBotReply() {

    fetch(url, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
    'model': 'text-davinci-003',
    'prompt': 'Sound enthusiastic in five words or less.'
    })
    }).then(response => response.json()).then(data => 
    movieBossText.innerText = data.choices[0].text)
    }



// const url = "https://api.openai.com/v1/completions"

// fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${apiKey}`
//     },
//     body: JSON.stringify({
//         'model': 'text-davinci-003',
//         'prompt': 'What is the capital of Spain?'
//     })
// }).then(response => response.json()).then(data => console.log(data))