import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";
import apiRequest from "./components/apiRequest";
import "./App.css";

function App() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);
  const [addItem, setAddItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!addItem) return;
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = { id, checked: false, text: addItem };
    const addNewItem = [...items, newItem];
    setItems(addNewItem);
    setAddItem("");

    const postOption = {
      method: "POST",
      headers: {
        "Contet-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    };

    const result = await apiRequest(API_URL, postOption);
    if (result) throw setFetchError(result);
  };

  const handleChange = async (id) => {
    const listItems = items.map((i) =>
      i.id === id ? { ...i, checked: !i.checked } : i
    );
    setItems(listItems);

    const myItem = listItems.filter((i) => i.id === id);

    const updateOption = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };

    const reqURL = `${API_URL}/${id}`;
    const result = await apiRequest(reqURL, updateOption);
    if (result) throw setFetchError(result);
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((i) => i.id !== id);
    setItems(listItems);

    const deleteOption = {
      method: "DELETE",
    };

    const reqURL = `${API_URL}/${id}`;
    const result = await apiRequest(reqURL, deleteOption);
    if (result) throw setFetchError(result);
  };

  return (
    <>
      <Header />
      <AddItem
        addItem={addItem}
        setAddItem={setAddItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p style={{ textAlign: "center" }}>Loading items...</p>}
        {fetchError && (
          <p
            style={{ textAlign: "center", color: "red" }}
          >{`Error: ${fetchError}`}</p>
        )}
        {!isLoading && !fetchError && (
          <Content
            items={items.filter((i) =>
              i.text.toLowerCase().includes(search.toLowerCase())
            )}
            handleChange={handleChange}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
