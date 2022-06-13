window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:8000/api/locations/'

    try {
        const response = await fetch(url)

        if (!response.ok) {
            console.log('Error 2')
        }
        else {
            const data = await response.json()
            const locationTag = document.querySelector('#location')
            for (let location of data.locations) {
                const newOption = document.createElement('option')
                newOption.value = location.href.slice(15,-1)
                newOption.innerHTML = location.name
                locationTag.appendChild(newOption)
            }

            const formTag = document.getElementById('create-conference-form')
            formTag.addEventListener('submit', async event => {
                event.preventDefault()
                const formData = new FormData(formTag)
                const json = JSON.stringify(Object.fromEntries(formData))
                const conferenceUrl = 'http://localhost:8000/api/conferences/'
                const fetchConfig = {
                method: "post",
                body: json,
                headers: {
                    'Content-Type': 'application/json',
                },
                }
                const response = await fetch(conferenceUrl, fetchConfig)
                if (response.ok) {
                formTag.reset()
                const newConference = await response.json()
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
