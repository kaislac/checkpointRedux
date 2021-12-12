import React from 'react'
import { Checkbox } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { changeToDo } from '../redux/action/action'

const Task = (props) => {
  const dispatch = useDispatch()
  return (
    <tr style={{ textAlign: 'center' }}>
      <td>
        <h3 style={{ display: 'inline', textAlign: 'center' }}>
          {props.description}
        </h3>
      </td>
      <td>
        <Checkbox
          style={{ textAlign: 'center' }}
          defaultValue={props.isDone}
          onChange={() => {
            dispatch(changeToDo({ isDone: props.isDone, id: props.id }))
          }}
        ></Checkbox>
      </td>
    </tr>
  )
}

export default Task
