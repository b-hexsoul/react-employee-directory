import React from "react";

export function SearchBar(props) {
  return (
    <input
      type="search"
      placeholder="Name"
      onChange={() => {
        props.handleInput();
      }}
    />
  );
}
