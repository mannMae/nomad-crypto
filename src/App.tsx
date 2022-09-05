import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Circle from "./Circle";

function App() {
  const [value, setValue] = useState("");
  const changeInput = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    return "s";
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={changeInput}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
