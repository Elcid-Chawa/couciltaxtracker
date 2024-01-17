import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

function formatDate(date  = new Date()){
  const year = date.toLocaleString('default', {year: 'numeric'});
  const month = date.toLocaleString('default', {month: '2-digit'});
  const day = date.toLocaleString('default', {day:'2-digit'});
  return [year, month, day ].join('-');
}

function BusinessForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [address, setAddress] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [registrationdate, setRegistrationDate] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, businessType, address, contactInfo, registrationdate };
    try {
      await onSubmit(data);
      setName("");
      setBusinessType("");
      setAddress("");
      setContactInfo("");
      setRegistrationDate(new Date());
      alert("Business registered successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>New Business</h3>
      <Form.Group as={Row}>
        <Form.Label column sm={2} htmlFor="name">
          Business Name:
        </Form.Label>
        <Col sm={5}>
          <Form.Control
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2} htmlFor="businessType">
          Business Type:
        </Form.Label>
        <Col sm={2}>
          <Form.Control
            type="text"
            id="businessType"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2} htmlFor="address">
          Address:
        </Form.Label>
        <Col sm={5}>
          <Form.Control
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2} htmlFor="contactInfo">
          Contact Information:
        </Form.Label>

        <Col sm={5}>
          <Form.Control
            type="text"
            id="contactInfo"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2} htmlFor="registrationdate">
          Reistration Date:
        </Form.Label>

        <Col sm={5}>
          <Form.Control
            type="date"
            id="registrationdate"
            value={formatDate(registrationdate)}
            onChange={(e) => setRegistrationDate(new Date(e.target.value))}
          />
        </Col>
      </Form.Group>

      <button className="btn btn-success" type="submit">
        Register Business
      </button>
    </Form>
  );
}

export default BusinessForm;
