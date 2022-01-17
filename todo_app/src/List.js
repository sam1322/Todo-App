// import React from 'react'
function TodoList({todo}){
    return (
        <>
        <h2>Todo List</h2>
        <center>
        <div className="ui relaxed divided list"  >
        {todo.map((todo,i)=>
            <div className="item" key={i} style={{width:'50%' }}>
                <i className="large bell outline middle aligned icon"></i>
                <div className="content " >
                    <div className="header" ><h3>{todo}</h3></div>
                    <div className="description" >Dummy deadline </div>
                </div>
            </div>
            )
        }
        </div>
        </center>
        </>
    )
}

export default TodoList