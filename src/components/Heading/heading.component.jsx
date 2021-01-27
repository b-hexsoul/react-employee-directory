import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export function Heading() {
  return (
    <Container className="bg-light" fluid>
      <Row className="justify-content-center my-3">
        <h1>Employee Directory</h1>
      </Row>
    </Container>
  );
}
