import { Checkbox } from "@mui/material";
import React from "react";

export const ItemsList = ({ allItems, addToDone, doneItems }) => {
  console.log(doneItems);
  const changeStatus = (idx) => {
    if (doneItems.includes(idx)) {
      let updatedDoneItems = doneItems.filter((item) => item !== idx);
      addToDone(updatedDoneItems);
    } else {
      addToDone([...doneItems, idx]);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        justifyContent: "flex-start",
      }}
    >
      {allItems.map((item, idx) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
          key={idx}
        >
          <Checkbox onChange={() => changeStatus(idx)}></Checkbox>
          <span
            style={{
              textDecoration: doneItems.includes(idx) ? "line-through" : "none",
              fontSize: 24,
            }}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
};
