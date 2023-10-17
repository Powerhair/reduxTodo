//redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setTodoStatus } from "../../redux/todoSlice";
import { setSelectedTodoId, openDeletePopup } from "../../redux/popupSlice";

//react

function Tasks() {
  const todoList = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteClick = (todoId: string) => {
    dispatch(setSelectedTodoId(todoId));
    dispatch(openDeletePopup());
  };

  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>
          <p>
            {todo.description}, {todo.title}
          </p>
          <div>
            Copy code
            <button
              type="button"
              onClick={() => handleDeleteClick(todo.id)}
            ></button>
            <input
              type="checkbox"
              value={todo.completed.toString()}
              onChange={() => {
                dispatch(
                  setTodoStatus({ completed: !todo.completed, id: todo.id })
                );
              }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
