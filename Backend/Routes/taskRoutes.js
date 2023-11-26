const express = require('express');
const router = express.Router();
const connection=require("../utilis/sqlConnection")
const {uuid}=require("uuidv4")


router.get('/allTask', (req, res) => {
    connection.query(`SELECT * FROM task`,(error,results)=>{
        if(error){
            console.log(error);
            res.status(500).json({error:error});
        }
        else{
            res.status(200).json({results});
        }
    })
});
router.delete('/deleteTask', (req, res) => {
    const {Tasl_id}=req.body;
    console.log(Tasl_id)
    connection.query(  `delete from task where Tasl_id="${Tasl_id}"`,(error,results)=>{

                res.send(200).json({results,status:"successfull"});
        })
    
});
router.post('/createTask', (req, res) => {
    // console.log("updateTask");
    console.log(uuid());
    const {data}=req.body;
    console.log(data.description);

    connection.query(`INSERT INTO task(Tasl_id,descp) VALUES(?,?)`,[uuid().substr(0,10),data.description],(error,results)=>{
        if(error){
            console.log(error);
            res.status(500).json(error);
        }
        else{
            res.status(200).json({results,message:"successfull"});
        }
    })
});

router.patch('/updateTask', (req, res) => {
    const {data}=req.body;
    console.log(data);
    connection.query(`update task set descp=? where tasl_id=?`,[data.descp,data.Tasl_id],(error,results)=>{
        if(error){
            console.log(error);
            res.status(500).json(error);
        }
        else{
            res.status(200).json({results});
        }})
    console.log("updateTask");
});


module.exports = router;