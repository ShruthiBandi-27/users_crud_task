import React from 'react'
import { Button, Container, Table } from "reactstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const UserList = () => {
    const [data, setData] = useState([]);
    const nav = useNavigate();
    
    const getData = () => {
      fetch("https://64427c1776540ce2258d681f.mockapi.io/users")
        .then((data) => data.json())
        .then((res) => setData(res));
    };
    useEffect(() => {
      getData();
    }, []);
  
    const handleDelete = (id) => {
      fetch("https://64427c1776540ce2258d681f.mockapi.io/users/" + id, {
        method: "DELETE",
      })
        .then((data) => data.json())
        .then((res) => getData());
    };
    return (
      <Container>
        <Button
          className="mb-3 mt-5 custom-button"
          onClick={() => {
            nav("/createuser");
          }}
        >
          Create User
        </Button>
        <h3 className="text-center mb-4">Users</h3>
        <Table hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Avatar</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.address}</td>
                  <td><img src={value.avatar}alt="User Avatar" /></td>
                  <td>
                    <Button
                      color="warning"
                      onClick={() => {
                        nav("/edituser/" + value.id);
                      }}
                      className="me-3"
                    >
                      Edit
                    </Button>
                    <Button
                      color="danger"
                      onClick={() => {
                        handleDelete(value.id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    );
}

export default UserList