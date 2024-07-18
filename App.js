
import React, { useState } from 'react'

import './App.css';

// function  App(){
  const App = () => {
    const [title,setTitle] = useState("")
    const [des,setDes] = useState("")
    const [mainTask,setMainTask] = useState([])
    const submitHandler= (e) => {
      e.preventDefault()
setMainTask([...mainTask ,{title,des}]);
console.log(mainTask)
setTitle("")
setDes("")
    }
    const deleteHandeler = (i) => {
      let copytask =[...mainTask]
      copytask.splice(i,1)
      setMainTask(copytask)
    }
 let renderTask = <h2>No Task  Available</h2>
 if(mainTask.length>0){
 renderTask = mainTask.map((t,i) =>{
return(
<li  className='deletebtn'>
<div >
  <h5>{t.title}</h5>
  <h6> {t.des}</h6>
</div>
<button onClick={() => deleteHandeler(i)}>
Delete
</button>
</li>

 )})}
    return (
      <>
     <div className="App">
      <h1 className="heading">My Todo List</h1>
      </div>
      <form onSubmit ={submitHandler} >
  <input type="text" placeholder='Enter Task Here' value={title}
  onChange={(e)=>{
    // console.log(e.target.value)
     setTitle(e.target.value) 
  }} />
  <input type="text" placeholder='Enter Description Here' value={des}
  onChange={(e)=>{
    // console.log(e.target.value)
    setDes(e.target.value) 
  }} />
<button className='button'>Add Task</button>


</form>
       <hr />
       <div className='box'>
        <ul>
          {renderTask}
        </ul>
       </div>
       </>
  );
}

export default App;
