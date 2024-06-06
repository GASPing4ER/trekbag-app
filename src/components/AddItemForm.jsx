import { useRef, useState } from "react";
import Button from "./Button";

const AddItemForm = ({ onAddItem }) => {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText.trim()) {
      alert("Please enter an item");
      setItemText("");
      inputRef.current.focus();
      return;
    }
    onAddItem(itemText);
    setItemText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        type="text"
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
        autoFocus={true}
        ref={inputRef}
      />
      <Button>Add to list</Button>
    </form>
  );
};

export default AddItemForm;
