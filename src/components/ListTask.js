import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from 'antd'

import Task from './Task'

export const ListTask = () => {
  const { todoList, isVisible, filterTodos } = useSelector((state) => state)

  return (
    <>
      <h2>List of Task</h2>
      <Card style={{ textAlign: 'center' }}>
        {(!isVisible ? todoList : filterTodos).map((tod) => {
          const { description, isDone, id } = tod
          return <Task description={description} isDone={isDone} id={id} />
        })}
      </Card>
    </>
  )
}

export default ListTask
