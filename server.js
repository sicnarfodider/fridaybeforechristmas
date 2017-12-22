const express= require('express');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 9000;
const app = express();


app.use(cors());

app.use(express.static(path.resolve(__dirname, 'client', 'dist')));

app.get('/api/get-stuff',(req, res)=>{
  const stuff={
    name: 'aliens',
    message: 'we come in peace'
  };
  res.send(stuff);
});

app.get('/api/get-humans',(req, res)=>{
  const stuff={
    name: 'humans',
    message: 'do not anal probe us'
  };
  res.send(stuff);
});


app.get('*',(req,res)=>{
  res.send(path.resolve(__dirname, 'client', 'dist', 'index.html'))
});



app.listen(PORT, ()=>{
  console.log('Server is up and running @ localhost:9000')
})
