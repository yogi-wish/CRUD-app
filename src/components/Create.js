import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://6362a97c66f75177ea356429.mockapi.io/Crud-api", {
        name: name,
        email: email,
        header,
      })
      .then(() => {
        history("/read");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="bs m-5">
        <div className="d-flex justify-content-between">
          <h1>Create</h1>
          <Link to="/read">
            <button className="btn btn-secondary">Show Data</button>
          </Link>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Create;
