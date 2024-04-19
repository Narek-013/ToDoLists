import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {changeEdit,selectToDos,} from "../../store/slices/toDos/toDoSlices";
import {fetchChecked,fetchDelete,fetchGet,} from "../../store/slices/toDos/API";
import EditItem from "../EditItem/EditItem";
import { CiTrash } from "react-icons/ci";
import { imgs } from "../../images/img";
import { selectSearch } from "../../store/slices/toDosSearch/searchSlice";
import "./toDoItems.css";

const ToDoItems = () => {
  const toDos = useSelector(selectToDos);
  const search = useSelector(selectSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGet());
  }, []);

  const deleteItem = (el) => {
    dispatch(fetchDelete(el.id));
  };

  const changeCheked = (el) => {
    dispatch(fetchChecked(el));
  };

  const changeEditing = (el) => {
    dispatch(changeEdit(el));
  };

  return (
    <div className="toDoBlock" >
      <h3>{search.searchButton ? "Seacrh ToDo Item ?" : " ToDo Items"}</h3>
      <div className="toDoBlockItems">
        {search.searchButton
          ? search.isSearch.map((el) => {
              return (
                <div key={el.id} className="toDoss">
                  {el.isEdit ? (
                    <EditItem el={el} />
                  ) : (
                    <p className={el.isCompleted ? "line" : ""}>{el.text}</p>
                  )}
                  <p>
                    {toDos.map((elem) =>
                      elem.id === el.id ? `${elem.id}` : ""
                    )}
                  </p>
                </div>
              );
            })
          : toDos.map((el) => {
              return (
                <div key={el.id} className="toDoss">
                  <input
                    type="checkbox"
                    className="checkBoxs"
                    checked={el.isCompleted}
                    onChange={() => changeCheked(el)}
                  />
                  {el.isEdit ? (
                    <EditItem el={el} />
                  ) : (
                    <p className={el.isCompleted ? "line" : ""}>{el.text}</p>
                  )}
                  <div className="imgs">
                    <img
                      onClick={() => changeEditing(el)}
                      src={imgs.editImg}
                      alt="#"
                    />
                    <CiTrash
                      className="delImg"
                      onClick={() => deleteItem(el)}
                    />
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ToDoItems;
