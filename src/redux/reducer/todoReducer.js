import {
  ADDTODO,
  ISDONE,
  SHOWALL,
  SHOWDONE,
  SHOWINCOMPLETE,
} from '../action/action_type'

const initialState = {
  todoList: [],
  filterTodos: [],
  isVisible: false,
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { id: Date.now(), description: action.payload, isDone: false },
        ],
      }

    case ISDONE:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, isDone: !action.payload.isDone }
            : todo
        ),
      }

    case SHOWALL:
      return { ...state, isVisible: false }
    case SHOWINCOMPLETE:
      return {
        ...state,
        filterTodos: state.todoList.filter((tod) => tod.isDone === false),
        isVisible: true,
      }
    case SHOWDONE:
      return {
        ...state,
        filterTodos: state.todoList.filter((tod) => tod.isDone === true),
        isVisible: true,
      }
    default:
      return state
  }
}

export default todoReducer
