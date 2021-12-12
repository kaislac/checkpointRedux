import { showALL, showIncomplete, showDone } from '../redux/action/action'
import { useDispatch } from 'react-redux'

export const VisibilityFilter = () => {
  const dispatch = useDispatch()

  return (
    <container>
      <tr>
        <button onClick={() => dispatch(showALL())}>All</button>
        <button onClick={() => dispatch(showIncomplete())}>INCompleted</button>
        <button onClick={() => dispatch(showDone())}>Completed</button>
      </tr>
    </container>
  )
}
