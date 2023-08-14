import React from 'react'

const DisplayTodo = (props) => {
    const { todoArray, setTodoArray } = props

    const handleCheck = (i) => {

        const cmp = {...todoArray[i]}

        cmp.completed = !cmp.completed

        setTodoArray([...todoArray.slice(0, i), cmp].concat(todoArray.slice( i + 1 )))
    }

    const handleDelete = (i) => {
        console.log(todoArray)
        setTodoArray([...todoArray.slice(0,i)].concat(todoArray.slice( i + 1 )))
        console.log(todoArray)
    }

  return (
    <div className='container w-50 mt-5'>
        <hr></hr>
        {
            todoArray.map((todo, i) => (
                <div key={i} className='d-flex justify-content-center align-items-center mb-3'>
                    {todo.completed ?
                        (<del className='d-flex justify-content-start align-items-center w-75'>{ todo.newTodo }</del>) :
                        (<div className='d-flex justify-content-start align-items-center w-75 fs-4'>{ todo.newTodo } </div>)
                    }
                    <div className='d-flex justify-content-between align-items-center w-25'>
                        <input type='checkbox' onClick={ () => handleCheck(i) } checked={todo.completed}></input>
                        <button type="submit" className="btn btn-danger" onClick={ () => handleDelete(i) }>Delete</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default DisplayTodo