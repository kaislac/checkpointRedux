import React, { useRef } from 'react'
import { Input, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { addToDo } from '../redux/action/action'

export const AddTask = (props) => {
  const todo = useSelector((state) => state)
  console.log(todo)

  const dispatch = useDispatch()
  const inputRef = useRef()

  console.log(inputRef.current?.state?.value)
  return (
    <div className='App'>
      <Input type='text' ref={inputRef} />
      <Button
        type='primary'
        onClick={() => {
          dispatch(addToDo(inputRef.current.state.value))
        }}
      >
        AddToDo
      </Button>
    </div>
  )
}

export default AddTask
