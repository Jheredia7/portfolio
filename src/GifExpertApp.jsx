import { useState } from "react";

import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory]);
  };

  return (
    <>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      <br />
      <br />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
