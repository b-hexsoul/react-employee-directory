import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function EmployeeCard(props) {
  return (
    <ListGroup.Item>
      <Container fluid>
        <Row className="justify-content-between align-items-center">
          <Col xs={2}>
            <Image src={props.employee.picture.thumbnail} alt="employee" roundedCircle />
          </Col>
          <Col xs={9}>
            <h4>
              {props.employee.name.first} {props.employee.name.last}
            </h4>
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
}
