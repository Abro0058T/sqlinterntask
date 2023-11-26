import React, { Fragment ,useState ,useEffect} from 'react'
import style from "./task.module.css"
import Popup from 'reactjs-popup';
import axios  from 'axios';
function Task() { 
  const [update, setupdate] = useState(false);
  const [note, addNote] = useState("");
  const [open, setopen] = useState(true)

  const closeModel = () => {
console.log("close")
    // setopen(false);
  }
  const clickDelete = async(e) => {
    console.log(e.target.value)
    const result= await axios.get('http://localhost:4000/api/deleteTask' ,{ 
    data: { "Tasl_id": e.target.value }})
    // window.location.reload(true);
    console.log(result);
  }
  const [task, settask] = useState(null);
  const [error, seterror] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:4000/api/allTask').then((response)=>{
      settask(response.data.results);
      console.log(response.data.results);
    }).catch((error)=>{
      seterror(error);
    })
  }, [])
  const submitNote=async (e)=>{
      console.log("hello")
      const result= await axios.patch('http://localhost:4000/api/updateTask' ,{ 
      data: { "Tasl_id": e.target.value,"descp":note }})
      window.location.reload(true);
      console.log(result);

  }
  return (
    <Fragment>
      {!task ? (
        <h1>Loading </h1>
      ) :
        (<Fragment>
          {task.map((e) => {
            return (
              <div className={style.box} key={e.Tasl_id}>
                <div className={style.time}>{e.cretae_time.substr(0, 10)}<br />{e.update_time.substr(0, 10)}</div>
                <div className={style.descp}>
                  {e.descp}
                </div>
                <div className={style.buttonGroup}>
                  <button  onClick={clickDelete} value={e.Tasl_id}className={style.button}>
                    Delete
                  </button>
                  <button variant="contained" onClick={() => setupdate(true)} className={style.button} href="#contained-buttons">
                    Update
                  </button>
                </div>
              </div>
            )
          })}
        </Fragment>)
      }
    </Fragment>
  )
}

export default Task