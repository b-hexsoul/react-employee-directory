import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function EmployeeCard(props) {
  return (
    <ListGroup.Item style={{ cursor: "pointer" }} onClick={() => props.handleClick(props)}>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col sm={2}>
            <Image className="mx-3" src={props.employee.picture.thumbnail} alt="employee" roundedCircle />
          </Col>
          <Col sm>
            <h4>
              {props.employee.name.first} {props.employee.name.last}
            </h4>
          </Col>
          <Col sm>
            <h6>
              {props.employee.location.city}, {props.employee.location.state}
            </h6>
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
}
