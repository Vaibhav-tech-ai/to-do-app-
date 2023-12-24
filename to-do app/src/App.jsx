import { useState } from "react";
import { Button, Card, CardHeader, ListItem, TextField } from "@mui/material";
import "./App.css";
import { InputComponent } from "./components/InputComponent";
import { ItemsList } from "./components/ItemsList";

function App() {
  const [item, setItem] = useState("");
  const [allItems, addItem] = useState([]);
  const [doneItems, addToDone] = useState([]);

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "#EBEBEB",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <InputComponent
        item={item}
        takeInput={setItem}
        addItem={addItem}
        allItems={allItems}
      />
      <ItemsList
        allItems={allItems}
        doneItems={doneItems}
        addToDone={addToDone}
      ></ItemsList>
    </Card>
  );
}

export default App;
