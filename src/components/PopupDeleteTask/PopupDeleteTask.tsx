//react
import Popup from "../Popup/Popup";

//redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { removeTodo } from "../../redux/todoSlice";
import { setSelectedTodoId, closePopup } from "../../redux/popupSlice";

//scss

import "./PopupDeleteTask.scss";

//props

function PopupDeleteTask() {
  const selectedTodoId = useSelector(
    (state: RootState) => state.popup.selectedTodoId
  );
  const dispatch = useDispatch<AppDispatch>();

  const isOpen = useSelector((state: RootState) => state.popup.isOpenDelete);

  const handleDeleteConfirm = () => {
    dispatch(removeTodo(selectedTodoId));
    dispatch(setSelectedTodoId(null));
    dispatch(closePopup());
  };

  return (
    <Popup
      buttonText="Удалить?"
      handleClick={handleDeleteConfirm}
      isOpen={isOpen}
    >
      <div className="popup__delete">
        <p className="popup-delete__text">Точно хотите удалить задачу?</p>
      </div>
    </Popup>
  );
}

export default PopupDeleteTask;
