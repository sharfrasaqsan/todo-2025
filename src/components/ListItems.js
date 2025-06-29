import ItemList from "./ItemList";

const ListItems = ({ items, handleChange, handleDelete }) => {
  return (
    <ul className="todo-list">
      {items.map((i) => (
        <ItemList
          i={i}
          handleChange={handleChange}
          handleDelete={handleDelete}
          key={i.id}
        />
      ))}
    </ul>
  );
};

export default ListItems;
