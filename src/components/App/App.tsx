// React App

// Components import
import Tasks from "../Tasks/Tasks";
import PopupAddTask from "../PopupAddTask/PopupAddTask";
import PopupDeleteTask from "../PopupDeleteTask/PopupDeleteTask";
//redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { openAddPopup } from "../../redux/popupSlice";

//scss
import "./App.scss";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const handleOpenAddPopup = () => {
    dispatch(openAddPopup());
  };

  return (
    <div className="main">
      <div className="main__container">
        <h1 className="main__title">Redux List App</h1>
        <button className="main__button-add" onClick={handleOpenAddPopup}>
          Добавить
        </button>
      </div>
      <Tasks />
      <PopupAddTask></PopupAddTask>
      <PopupDeleteTask></PopupDeleteTask>
    </div>
  );
}

export default App;
