import { useState } from "react";
import "./PopupAddTask.scss";
import Popup from "../Popup/Popup";
//redux
import { addTodo } from "../../redux/todoSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { closePopup } from "../../redux/popupSlice";

//scss
import "./PopupAddTask.scss";

//props

function PopupAddTask() {
  const [todoDescription, setTodoDescription] = useState("");
  const [todoTitle, setTodoTitle] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const isOpen = useSelector((state: RootState) => state.popup.isOpenAdd);

  const handleAddTask = () => {
    dispatch(addTodo(todoDescription, todoTitle));
    setTodoDescription("");
    setTodoTitle("");
    dispatch(closePopup());
  };

  return (
    <Popup buttonText="Добавить" handleClick={handleAddTask} isOpen={isOpen}>
      <div className="popup-add">
        <input
          className="popup-add__input"
          onChange={(e) => setTodoTitle(e.target.value)}
          value={todoTitle}
        />
        <input
          className="popup-add__input"
          onChange={(e) => setTodoDescription(e.target.value)}
          value={todoDescription}
        />
      </div>
    </Popup>
  );
}

export default PopupAddTask;
