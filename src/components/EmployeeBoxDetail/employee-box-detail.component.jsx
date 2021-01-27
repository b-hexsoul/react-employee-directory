import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

export function EmployeeBoxDetail(props) {
  if (Object.keys(props.employee).length === 0) {
    return (
      <Card>
        <h1>Hello</h1>
      </Card>
    );
  }

  return (
    <Card>
      <Card.Body className="text-center">
        <Image src={props.employee.picture.large} roundedCircle />
        <h4>
          {props.employee.name.first} {props.employee.name.last}
        </h4>
        <h4>{props.employee.email}</h4>
        <h4>{props.employee.phone}</h4>
      </Card.Body>
    </Card>
  );
}
