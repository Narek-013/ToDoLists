import { useDispatch, useSelector } from "react-redux";
import { postItems, selectToDos } from "../../store/slices/toDos/toDoSlices";
import { fetchToDos } from "../../store/slices/toDos/API";
import { FaSearch } from "react-icons/fa";
import { BsCloudPlusFill } from "react-icons/bs";
import "./toDoHeader.css";
import {
  activetionSearch,
  selectSearch,
  searchToDo,
} from "../../store/slices/toDosSearch/searchSlice";

const ToDoHeader = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const toDos = useSelector(selectToDos);

  const submitToDos = async (ev) => {
    ev.preventDefault();

    let text = ev.target[0].value;

    let newItem = {
      id: new Date().getTime().toString(),
      text,
      isCompleted: false,
      isEdit: false,
    };

    if (text.trim()) {
      dispatch(fetchToDos(newItem));
    }
   
    ev.target.reset();
  };

  const searchActivetion = () => {
    dispatch(activetionSearch());
  };

  const activetionSearchs = (ev) => {
    dispatch(searchToDo({ toDos, ev }));
  };

  console.log(search.isSearch);
  return (
    <div className="headerToDo">
      <div className="headerTop">
        <h1>To Do Lists</h1>
        <FaSearch
          className={search.searchButton ? "active" : "search"}
          onClick={searchActivetion}
        />
      </div>
      {search.searchButton ? (
        <form>
          <input
            className="searchInput"
            type="search"
            placeholder="search your Item A-Z ..."
            onChange={(ev) => activetionSearchs(ev.target.value)}
          />
        </form>
      ) : (
        <form onSubmit={submitToDos}>
          <input
            className="addItemInput"
            type="text"
            placeholder="add a new Task"
          />
          <button>
            <BsCloudPlusFill className="img" />
          </button>
        </form>
      )}
    </div>
  );
};

export default ToDoHeader;

