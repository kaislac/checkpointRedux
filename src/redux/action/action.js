import {
  ADDTODO,
  ISDONE,
  SHOWALL,
  SHOWINCOMPLETE,
  SHOWDONE,
} from './action_type'

export const addToDo = (payload) => ({
  type: ADDTODO,
  payload,
})
export const changeToDo = (payload) => ({
  type: ISDONE,
  payload,
})
export const showALL = (payload) => ({
  type: SHOWALL,
  payload,
})

export const showIncomplete = (payload) => ({
  type: SHOWINCOMPLETE,
  payload,
})
export const showDone = (payload) => ({
  type: SHOWDONE,
  payload,
})
