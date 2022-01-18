import db from "./firebase"
import {doc , setDoc ,deleteDoc} from 'firebase/firestore'
import {useState} from 'react'
function Todo({i,todo}){
    const [open ,setOpen]=useState(false);
    const [input,setInput]=useState('')
    const handleOpen =()=>{
        setOpen(true)
    }
    const handleClose = ()=>{
        setOpen(false)
    }
     const addTodo = (ev)=>{ const Ref = doc(db, 'Todolist', todo.id);
     setDoc( Ref, { todo:input }, { merge: true });
     handleClose();
     ev.preventDefault()
     }
    if(open)
    {
        return (
        <> 
        
        <form className="field " onSubmit={addTodo}>
            <div className='center floated ui form'>
                <div className="ui segment field">
                    <label>Update Value</label>
                    <input
                        placeholder='Name'
                        defaultValue={todo.todo}
                        onChange={ev=>setInput(ev.target.value)}
                        autoFocus={true}
                    />        
                </div>
                <div type="submit" onClick={addTodo} className="ui submit button">Update</div>
                <br/>
                <br/>
            </div>
        </form>
        <button onClick={handleClose} className="negative ui button">Cancel</button>
        </>
        )
    }
    else return (       
            <div className="item"   style={{width:'50%' }}>
                <>
                <i  className="large bell outline left floated middle aligned icon"></i>
                <i  onClick={ev=>{handleOpen()}} className="large edit right floated middle aligned icon"></i>
                <i  onClick={async(ev)=>{await deleteDoc(doc(db, "Todolist", todo.id));}} className="large trash right floated middle aligned icon"></i>

                <div className="content  " key={i}>
                    <>
                    <div className="header" ><h3>{todo.todo}</h3></div>
                    <div className="description" >Dummy deadline </div>
                    </>
                </div>
                </> 

            </div>
    )
   
}

function TodoList({todo}){
    return (
        <>
        <h2>Todo List</h2>
        <center>
        <div className="ui relaxed divided list"  >
        {todo.map((todo,i)=><div className="item" key={i}><Todo i={i} todo={todo} />    </div>        )
        }
        </div>
        </center>
        </>
    )
}

export default TodoList