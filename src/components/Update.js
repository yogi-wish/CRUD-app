import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Update() {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://6362a97c66f75177ea356429.mockapi.io/Crud-api/${id}`, {
      name: name,
      email: email,
    });
  };
  return (
    <>
      <div className="bs m-5">
        <h1>Update</h1>
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
          <Link to="/read">
            <Button
              variant="success"
              type="submit"
              onClick={() => handleUpdate}
            >
              Update
            </Button>
          </Link>
          <Link to="/read">
            <Button variant="secondary mx-2" type="submit">
              Back
            </Button>
          </Link>
        </Form>
      </div>
    </>
  );
}

export default Update;
