import React, { Component } from "react";
import { SearchBar } from "../SearchBar/search-bar.component";
import { EmployeeList } from "../EmployeeList/employee-list.component";
import { EmployeeBoxDetail } from "../EmployeeBoxDetail/employee-box-detail.component";
import Card from "react-bootstrap/Card";
import "./search-list-container.styles.css";

class SearchListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: { isSelected: false },
      showModal: false,
    };
  }

  handleClick = (details) => {
    this.setState({ selected: { isSelected: true, ...details.employee }, showModal: true });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <Card className="card mx-auto">
        <Card.Body className="text-center">
          <SearchBar className="mx-auto" handleInput={this.props.handleInput} />
          <EmployeeList employees={this.props.employees} handleClick={this.handleClick} />
          {this.state.selected.isSelected && (
            <EmployeeBoxDetail
              employee={this.state.selected}
              handleClose={this.handleClose}
              showModal={this.state.showModal}
            />
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default SearchListContainer;
