window.addEventListener('DOMContentLoaded', async () => {
    const selectTag = document.getElementById('conference');
  
    const url = 'http://localhost:8000/api/conferences/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
  
      for (let conference of data.conferences) {
        const option = document.createElement('option');
        option.value = conference.href;
        option.innerHTML = conference.name;
        selectTag.appendChild(option);
      }

    const spinnerTag = document.querySelector('#loading-conference-spinner')
    spinnerTag.classList.add("d-none")
    const conferenceTag = document.querySelector('#conference')
    conferenceTag.classList.remove("d-none")

    const formTag = document.getElementById('create-attendee-form')
    formTag.addEventListener('submit', async event => {
        event.preventDefault()
        const formData = new FormData(formTag)
        const json = JSON.stringify(Object.fromEntries(formData))
        const attendeeURL = "http://localhost:8001/api/attendees/"
        const fetchConfig = {
            method: "post",
            body: json,
            headers: {'Content-Type': 'application/json',}
        }
        const response = await fetch(attendeeURL, fetchConfig)
        if (response.ok) {

            formTag.classList.add("d-none")
            const successTag = document.querySelector('#success-message')
            successTag.classList.remove("d-none")

            formTag.reset()
            const newAttendee = await response.json()
        }
        else {
            console.log('error 3')
        }
    })
    }
  
  });