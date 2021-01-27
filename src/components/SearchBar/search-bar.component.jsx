import React from "react";
import Form from "react-bootstrap/Form";

export function SearchBar(props) {
  return (
    <Form.Group className="mt-3">
      <Form.Control
        type="search"
        placeholder="Name"
        onChange={(e) => {
          props.handleInput(e);
        }}
      />
    </Form.Group>
  );
}
