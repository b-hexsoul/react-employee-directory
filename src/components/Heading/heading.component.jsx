import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export function Heading() {
  return (
    <Container className="bg-secondary" fluid>
      <Row className="justify-content-center py-3">
        <h1>Employee Directory</h1>
      </Row>
    </Container>
  );
}
