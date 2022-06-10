import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

console.log('nothings happened yet')

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('after define root')
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
console.log('after priminary render')

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

console.log('after vitals')


async function loadAttendees() {
  console.log('about to fetch the url')
  const response = await fetch('http://localhost:8001/api/attendees/')
  console.log('fetched the url')

  if (response.ok) {
    console.log('response is ok')
    const data = await response.json()
    console.log('before render')
    // console.log(data.attendees)
    root.render(
      <React.StrictMode>
        <App attendees={data.attendees} />
      </React.StrictMode>
    );
    console.log('after render')
  }
  else {
    console.error('response is not ok')

  }
}
loadAttendees();