import React, { Component } from "react";
import { SearchListContainer } from "../SearchListContainer/search-list-container.component";
import { EmployeeBoxDetail } from "../EmployeeBoxDetail/employee-box-detail.component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class EmployeeContainer extends Component {
  constructor() {
    super();

    this.state = {
      employees: [],
      selected: {},
      search: "",
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=4")
      .then((res) => res.json())
      .then((body) => {
        console.log(body.results);
        this.setState({ employees: body.results });
      });
  }

  handleInput = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    let filteredEmployees = this.state.employees.filter((employee) => {
      let employeeName = employee.name.first + " " + employee.name.last;
      return employeeName.toLowerCase().includes(this.state.search.toLowerCase()) ? true : false;
    });

    return (
      <Container fluid>
        <Row>
          <Col xs={4}>
            <SearchListContainer employees={filteredEmployees} handleInput={this.handleInput} />
          </Col>
          <Col>
            <EmployeeBoxDetail employee={this.selected} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmployeeContainer;
