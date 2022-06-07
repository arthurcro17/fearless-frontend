function createCard(name, description, pictureUrl, start, end, location) {
    return `
      <div class="col-4">
        <div class="card shadow p-3 mb-5 bg-body rounded p-2 bg-light border">
          <img src="${pictureUrl}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${location}</h5>
            <p class="card-text">${description}</p>
          <div class="card-footer">${start} - ${end}</div>
          </div>
        </div>
      </div
    `
}


  window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/conferences/'
  
    try {
      const response = await fetch(url)
  
      if (!response.ok) {
        console.error(e)
      } else {
        const data = await response.json()
  
        for (let conference of data.conferences) {
          const detailUrl = `http://localhost:8000${conference.href}`
          const detailResponse = await fetch(detailUrl)
          if (detailResponse.ok) {
            const details = await detailResponse.json()
            const name = details.conference.name
            const description = details.conference.description
            const pictureUrl = details.conference.location.picture_url
            const starts = details.conference.starts
            const ends = details.conference.ends
            const start = `${starts.slice(5,7)}/${starts.slice(8,10)}/${starts.slice(0,4)}`
            const end = `${ends.slice(5,7)}/${ends.slice(8,10)}/${ends.slice(0,4)}`
            const location = details.conference.location.name
            const html = createCard(name, description, pictureUrl, start, end, location)

            const column = document.querySelector('.row');
            column.innerHTML += html;
          }
        }
  
      }
    } catch (e) {
        console.error(e)
    }
  
  });