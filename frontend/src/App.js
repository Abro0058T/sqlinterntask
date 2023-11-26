import logo from './logo.svg';
import './App.css';
import Task from './components/task/Task';
import Pop from './components/task/popup/Popup'
import { useState ,useEffect} from 'react';
import axios from 'axios';
// import Button from '@mui/material/Button'

function App() {

//   const tasks=[
//     {
//     descp:"hello world "
//   },
//   {
//     descp:"Hello world 2"
//   }
// ]
  return (

    <div className="App">
     <Task/>
     <Pop/>
    </div>
  );
}

export default App;
