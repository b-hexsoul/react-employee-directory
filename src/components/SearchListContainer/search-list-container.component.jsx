import React from "react";
import { SearchBar } from "../SearchBar/search-bar.component";
import { EmployeeList } from "../EmployeeList/employee-list.component";
import Card from "react-bootstrap/Card";

export function SearchListContainer(props) {
  return (
    <Card>
      <Card.Body className="text-center">
        <SearchBar className="mx-auto" handleInput={props.handleInput} />
        <EmployeeList employees={props.employees} handleClick={props.handleClick} />
      </Card.Body>
    </Card>
  );
}
