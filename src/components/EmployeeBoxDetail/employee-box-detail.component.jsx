import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";

export function EmployeeBoxDetail({ employee, showModal, handleClose }) {
  return (
    <>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <Image className="mx-5" src={employee.picture.large} roundedCircle />
            {employee.name.first} {employee.name.last}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col className="text-center">
            <p>{employee.email}</p>
            <p>{employee.phone}</p>
            <p>
              {employee.location.city}, {employee.location.state}
            </p>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
