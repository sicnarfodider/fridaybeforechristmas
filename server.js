const express= require('express');
const PORT = process.env.PORT || 9000;
const app = express();

app.get('*',(req,res)=>{
  res.send('<h1>♪Friday <sup><em>Before</em></sup> Chris†mas♪</h1>')
});



app.listen(PORT, ()=>{
  console.log('Server is up and runnint @ localhost:9000')
})
