import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { EmployeeCard } from "../EmployeeCard/employee-card.component";

export function EmployeeList(props) {
  return (
    <ListGroup className="mt-3">
      {props.employees.map((employee, index) => (
        <EmployeeCard key={index} employee={employee} handleClick={props.handleClick} />
      ))}
    </ListGroup>
  );
}
