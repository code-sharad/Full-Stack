const express = require('express');
const bodyparser = require('body-parser');


const app = express();
app.use(bodyparser.json());

const todoArr = [];



app.post('/api/send-data',(req,res) => {
    const inputData = req.body;
    todoArr.push(inputData);
    res.status(200).json({message:'Data received successfully.'})
})

app.get('/todo',(req,res) => {
    res.json({"todo":todoArr});
})

app.listen(3001, () => {
    console.log('Express server is running on port 3001');
  });