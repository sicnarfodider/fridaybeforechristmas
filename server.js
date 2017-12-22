const express= require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;
const app = express();


app.use(cors());

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
  res.send('<h1>♪Friday <sup><em>Before</em></sup> Chris†mas♪</h1>')
});



app.listen(PORT, ()=>{
  console.log('Server is up and running @ localhost:9000')
})
