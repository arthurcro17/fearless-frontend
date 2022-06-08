
window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:8000/api/states/'

    try {
        const response = await fetch(url)

        if (!response.ok) {
            console.log('Error 2')
        }
        else {
            const data = await response.json()
            const stateTag = document.querySelector('#state')
            for (let state of data.states) {
                const newOption = document.createElement('option')
                newOption.value = state.abbreviation
                newOption.innerHTML = state.name
                stateTag.appendChild(newOption)  
            }
            const formTag = document.getElementById('create-location-form')
            formTag.addEventListener('submit', async event => {
                event.preventDefault()
                const formData = new FormData(formTag)
                console.log(formData)
                const json = JSON.stringify(Object.fromEntries(formData))
                console.log(json)
                const locationUrl = 'http://localhost:8000/api/locations/'
                const fetchConfig = {
                method: "post",
                body: json,
                headers: {
                    'Content-Type': 'application/json',
                },
                }

                const response = await fetch(locationUrl, fetchConfig)
                if (response.ok) {
                formTag.reset()
                const newLocation = await response.json()
                }
                else {
                    console.log('error 3')
                }
        })

    }
    }
    catch (e) {
        console.log('error 1')
    }
})




