import { useEffect, useRef } from "react";
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const access = useRef(null);
  useEffect(() => {
    access.current.focus();
  }, []);
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    setInputValue("");
    onNewCategory(inputValue.trim());
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        ref={access}
        autoComplete="off"
        spellCheck={false}
        className="buscador"
        type="text"
        name="gifs"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
