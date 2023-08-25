import { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [backedData,setBackedData] = useState([{}]);

  let todo = [];
  function sendData() {
    axios.post('/api/send-data', { inputData: name })
      .then((res) => {
        console.log(res.data);
      })
      .catch(err => {
        console.log('Error sending data.');
      });
  };


  useEffect(() => {
    fetch('/todo')
      .then((res) => res.json()
      )
      .then((data) => {
        setBackedData(data['todo']);
        // console.log(data['todo']);
      })
      .catch(err => {
        console.log(err);
      })
  }, backedData)

  // backedData.map((data)=>{
  //   console.log(data['inputData'])
  // })
  
  

  return (
    <>
      <div>
        <label htmlFor="name">
          Name <input onChange={(e) => setName(e.target.value)} type="text" value={name} name="name" id="" />
          <button onClick={sendData}>submit</button>
        </label>

          {backedData.map((data,i) => <p key={i}>{data['inputData']}</p>)}

      </div>
    </>
  )
}

export default App
