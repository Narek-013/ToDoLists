

import { useDispatch, useSelector } from 'react-redux';
import './footerToDo.css'
import { delAll, delCompleted, selectToDos } from '../../store/slices/toDos/toDoSlices';
import { fetchDeleteAll, fetchDeleteCompletedItems } from '../../store/slices/toDos/API';

const FooterToDo = () => {

    const toDos = useSelector(selectToDos);
    const dispatch = useDispatch()
    let completed = toDos.filter(toDo => toDo.isCompleted)

    const deleteCompleted = () => {
        dispatch(fetchDeleteCompletedItems(completed));
    }

    const deleteAllItems = () => {
      dispatch(fetchDeleteAll(toDos));
    }

    return (
      <div className="footerToDo">
        <p>
          Length : <span>{completed.length} </span>
          <span>/ {toDos.length}</span>
        </p>
        <div className='deleteBtns'>
        <button onClick={deleteCompleted}>Completed</button>
        <button onClick={deleteAllItems}>Clear All</button>

        </div>
      </div>
    );
}

export default FooterToDo;
