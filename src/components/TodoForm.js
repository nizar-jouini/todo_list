import React, { useState } from 'react'

const TodoForm = (props) => {
    const { todoArray, setTodoArray} = props

    const [newTodo, setNewTodo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (newTodo == '') return

        setTodoArray([...todoArray, {
            newTodo: newTodo,
            completed: false
            }])

        setNewTodo("")
    }

  return (
    <div className='container w-50 mt-5'>
        <form className='d-flex justify-content-between align-items-center' onSubmit={ handleSubmit }>
            <div className='d-flex justify-content-center align-items-center w-75'>
                <label htmlFor="color" className="form-label me-3 fs-3">
                    Todo: 
                </label>
                <input type="text" className="form-control" onChange={ (e) => setNewTodo(e.target.value)} value={newTodo}></input>
            </div>
            <div>
                <button type="submit" className="btn btn-primary" style={{width: "71.63px"}}>Add</button>
            </div>
        </form>
    </div>
  )
}

export default TodoForm