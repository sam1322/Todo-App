import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import List from './List'
import db from './firebase'
import database from './firebase';
import { doc, addDoc , onSnapshot, collection, query ,Timestamp , } from "firebase/firestore";

function Btn(props){
  let clname = "ui button"
  if(props.value){
    clname= "ui submit button"
  }
  else
  {
    clname= "ui disabled button"
  }
  return (<div className={clname} onClick={props.addTodo} type="submit">Submit</div>)
}

function App() {
  const [todo, setTodos] = useState([])
  const [input,setInput] = useState('')
  console.log(":)", input)

  useEffect(()=>{
    const q = query(collection(db, "Todolist"))
  const unsub = onSnapshot(q, (querySnapshot) => {
    let arr = querySnapshot.docs.map(doc => doc.data().todo)
    console.log("Data",arr );
   setTodos(arr) 
  });
  },[])

  const addTodo = async(ev)=>{
    // setTodos([...todo,input])
    ev.preventDefault()
    // db.collection('Todolist').add({
    //   todo:input
    // })
    const time = new Timestamp.now().
    console.log(time)
    // const docRef = await addDoc(collection(db,"Todolist"),{
    //   todo:input,
    //   // timestamp: time.now()
    // })

    setInput("")
  }

   return (
    <div className="App">
     <h1>Hello World</h1>
  
    <form className="  field" onSubmit={addTodo}>
    <div className='left floated ui form'>
      <div className="ui segment field">
      <label>Add Todo</label>
      <input
      placeholder='Name'
      value={input}
      onChange={ev=>setInput(ev.target.value)}
      autoFocus={true}
    />

    <Btn value={input} addTodo={addTodo}/>

    </div>
    </div>
    </form>

    <List todo={todo}/>
 
    </div>

    
  );
}
 
export default App;
