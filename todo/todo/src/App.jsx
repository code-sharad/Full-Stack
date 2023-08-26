import { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import './App.css'

import {v4 as uuid4} from 'uuid';

function App() {
  const [name, setName] = useState('');
  const [backedData, setBackedData] = useState([]);

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
  }, [])

  // backedData.map((data)=>{
  //   console.log(data['inputData'])
  // })

  const handleAddTodo = (e) => {
    setName(e.target.value)
    // setBackedData(prevTodos => [...prevTodos, e.target.value]);
    
  }

  const handleDeleteTodo = (id) => {
    const updatedItems = backedData.filter((elem,ind) =>{
        return ind !== id;
    });
    setBackedData(updatedItems);
  }

  const removeAll = () => {
    return setBackedData([])
  }

  return (
    <>
      <div>
        <label htmlFor="name">
          Name <input onChange={handleAddTodo} type="text" value={name} name="name" id="" />
          <button onClick={sendData}>submit</button>
        </label>

        {backedData.map((data, i) =>
          <div key={i} className='drop-shadow' style={{'display':'flex','gap':'3rem','marginTop':'1rem','justifyContent':'space-evenly'}}>
             <p className='p' >{data['inputData']}</p><button onClick={() => handleDeleteTodo(i)}>x</button>
            </div>
        )}

      </div>
      <button onClick={removeAll}>remove all</button>
    </>
  )
}

export default App
