const express= require('express')
const app=express()
const port=4000
const taskRouters=require("./Routes/taskRoutes");
const bodyParser=require('body-parser')
const cors=require('cors');
app.use(bodyParser.json());
app.use(cors())

const connection=require("./utilis/sqlConnection")
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

app.use('/api/',taskRouters)

app.listen(port,()=>{
    console.log(` Server listening to port ${port}`);
})