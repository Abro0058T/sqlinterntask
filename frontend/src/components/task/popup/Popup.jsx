import React from 'react'
import style from './popup.module.css'
import Popup from 'reactjs-popup'
import { useState } from 'react';
import axios from 'axios';
function Pop() {
    const [open, setopen] = useState(false);
    const [note, addNote] = useState("");
    const closeModel = () => setopen(false);
    const submitNote = async() => {
        const result= await axios.post('http://localhost:4000/api/createTask' ,{ 
        data: { "description": note }})
        window.location.reload(true);
      }

    
    return (
        <div>
            <button className={style.button} onClick={() => setopen(true)} color="default">
                Add Task
            </button>
            <Popup open={open} onClose={closeModel} position="center">
                <div className={style.popup}>
                    <input placeholder='Enter the task' rows="4" value={note} onChange={(e) => addNote(e.target.value)} />
                    <button onClick={submitNote} className='button'>Add</button>
                </div>
            </Popup>
        </div>
    )
}

export default Pop