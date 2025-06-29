import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";
import "./Content.css";

const AddItem = ({ addItem, setAddItem, handleSubmit }) => {
  const inoutRef = useRef();

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <input
        type="text"
        autoFocus
        required
        id="additem"
        placeholder="Add items..."
        value={addItem}
        onChange={(e) => setAddItem(e.target.value)}
        ref={inoutRef}
      />
      <button>
        <FaPlus role="submit" tabIndex={0} />
      </button>
    </form>
  );
};

export default AddItem;
