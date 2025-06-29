import "./Content.css";
import ListItems from "./ListItems";

const Content = ({ items, handleChange, handleDelete }) => {
  return (
    <div className="content-container">
      {items.length ? (
        <ListItems
          items={items}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ) : (
        <p>List is empty</p>
      )}
    </div>
  );
};

export default Content;
