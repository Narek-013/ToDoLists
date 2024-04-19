import { useDispatch, useSelector } from "react-redux";
import { imgs } from "../../images/img";
import { fetchText } from "../../store/slices/toDos/API";
import "./editItem.css";

const EditItem = ({ el }) => {

  const dispatch = useDispatch();

  const changeTxts = (ev, el) => {
    ev.preventDefault();
    let newText = ev.target[0].value;
    if (ev.target[0].value.trim()) {
      dispatch(fetchText({ el, ev: newText }));
    }
    ev.target.reset();
  };

  return (
    <div className="editItems">
      <form onSubmit={(ev) => changeTxts(ev, el)}>
        <input type="text" placeholder="Type ..." />
        <button>
          <img src={imgs.done} alt="" />
        </button>
      </form>
    </div>
  );
};

export default EditItem;
