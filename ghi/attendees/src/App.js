import Nav from "./Nav"

function App(props) {
  if (props.attendees === undefined) {
    return null
  }

  return (
    <div>
    <Nav />
    <div className="container">
      <table className = "table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Conference</th>
          </tr>
        </thead>
        <tbody>
        { props.attendees && props.attendees.length ? props.attendees.map(attendee => {
          return (
            <tr key={ attendee.href }>
              <td>{ attendee.name }</td>
              <td>{ attendee.conference }</td>
            </tr>
          );
        }): null }
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default App;