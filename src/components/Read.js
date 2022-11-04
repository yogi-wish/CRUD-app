import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Form } from "react-bootstrap";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);
  const [tabledark, setTabledark] = useState("");

  function getData() {
    axios
      .get("https://6362a97c66f75177ea356429.mockapi.io/Crud-api")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://6362a97c66f75177ea356429.mockapi.io/Crud-api/${id}`)
      .then(() => {
        getData();
      });
  };

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  return (
    <>
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Mode"
          onClick={() => {
            if (tabledark === "table-dark") {
              setTabledark("");
            } else {
              setTabledark("table-dark");
            }
          }}
        />
      </Form>
      <div className="bs">
        <div className="d-flex justify-content-between">
          <h1>Read</h1>
          <Link to="/">
            <button className="btn btn-secondary">Create</button>
          </Link>
        </div>
        <Table
          className={`background ${tabledark}`}
          striped
          bordered
          hover
          size="sm"
        >
          <thead>
            <tr>
              <th>#id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {data.map((data) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>
                      <Link to="/update">
                        <button
                          className="btn-success"
                          onClick={() =>
                            setToLocalStorage(data.id, data.name, data.email)
                          }
                        >
                          <FaEdit />
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn-danger"
                        onClick={() => handleDelete(data.id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </Table>
      </div>
    </>
  );
}

export default Read;
