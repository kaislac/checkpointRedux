import { AddTask } from './components/AddTask'
import { ListTask } from './components/ListTask'

import React from 'react'
import './App.css'
// redux stuff

import { VisibilityFilter } from './components/VisibilityFilter'

function App() {
  return (
    <div className='App'>
      <h1>APP TO DO LIST</h1>
      <AddTask />
      <ListTask />
      <VisibilityFilter />
    </div>
  )
}

export default App
