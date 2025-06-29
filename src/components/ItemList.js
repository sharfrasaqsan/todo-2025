import { FaRegTrashAlt } from "react-icons/fa";

const ItemList = ({ i, handleChange, handleDelete }) => {
  return (
    <>
      <li key={i.id} className={`todo-item ${i.checked ? "completed" : ""}`}>
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={i.checked}
          onChange={() => handleChange(i.id)}
        />
        <label
          className="todo-text"
          onDoubleClick={() => handleChange(i.id)}
          style={{ userSelect: "none" }}
        >
          {i.text}
        </label>
        <FaRegTrashAlt
          className="todo-delete-icon"
          role="button"
          tabIndex={0}
          onClick={() => handleDelete(i.id)}
        />
      </li>
    </>
  );
};

export default ItemList;
