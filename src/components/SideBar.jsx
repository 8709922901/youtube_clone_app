import { Category } from "@mui/icons-material";
import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((Category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(Category.name)}
          style={{
            background: Category.name === selectedCategory && "#FC1503",
            color: "white",
          }}
          key={Category.name}
        >
          <span
            style={{
              color: Category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {Category.icon}
          </span>
          <span
            style={{
              opacity: Category.name === selectedCategory ? "1" : "1.5",
            }}
          >
            {Category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
