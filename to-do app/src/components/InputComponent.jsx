import React from "react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
export const InputComponent = ({ item, takeInput, addItem, allItems }) => {
  const handleChange = (e) => {
    takeInput(e.target.value);
  };
  

  const addToList = () => {
    addItem([...allItems, item]);
    takeInput("");
  };

  const clearList = () => {
    addItem([]);
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <TextField
        fullWidth
        label="Add To-Do Item"
        placeholder="Add Item"
        value={item}
        onChange={handleChange}
      ></TextField>
      <Button
        sx={{
          backgroundColor: "#162b42",
          color: "#FFF",
          textTransform: "none",
        }}
        onClick={addToList}
      >
        Add
      </Button>
      <Button
        sx={{
          backgroundColor: "#162b42",
          color: "#FFF",
          textTransform: "none",
        }}
        onClick={clearList}
      >
        Clear
      </Button>
    </div>
  );
};
