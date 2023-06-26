import {
    Container,
    FormGroup,
    Label,
    Input,
    Form,
    Button,
    Row,
    Col,
  } from "reactstrap";
  import { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  import "./style.css";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  
  
  export default function ActionUser() {
    const { id } = useParams();
    //console.log(rollno);
    const nav = useNavigate();
    const [formData, setFormData] = useState({
      name: "",
      address: "",
      avatar: "",
    });
    useEffect(() => {
      if (id) {
        fetch("https://64427c1776540ce2258d681f.mockapi.io/users/" + id)
          .then((data) => data.json())
          .then((res) => setFormData(res));
      }
    }, [id]);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = () => {
      if (id) {
        fetch("https://64427c1776540ce2258d681f.mockapi.io/users/" + id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((data) => data.json())
          .then((res) => {
            toast.info("User details Updated", {
              onClose: () => {
                console.log("closed");
                setTimeout(function () {
                  nav("/userlist");
                }, 2000);
              },
            });
          });
      } else {
        fetch("https://64427c1776540ce2258d681f.mockapi.io/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((data) => data.json())
          .then((res) => {
            console.log("submitted");
            toast.success("user created", {
              onClose: () => {
                console.log("closed");
                setTimeout(function () {
                  nav("/userlist");
                }, 2000);
              },
            });
          });
      }
    };
    return (
      <Container className="mt-4" >
        <ToastContainer autoClose={2000} />
        <h3 className="text-center">{id ? "Update " : "Create "} User</h3>
        <Form>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  name="name"
                  placeholder="User Name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              <FormGroup>
                <Label>Address</Label>
                <Input
                  name="address"
                  placeholder="User address"
                  onChange={handleChange}
                  value={formData.address}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              <FormGroup>
                <Label>Avatar</Label>
                <Input
                  name="avatar"
                  placeholder="User Profile URL example : https://cloudflare-ipfs.com/ipfs/avatar/253.jpg"
                  onChange={handleChange}
                  value={formData.avatar}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            {" "}
            <Col md={2}></Col>
            <Col md={8}>
              <FormGroup>
                <Button color="primary" block onClick={handleSubmit}>
                  {id ? "Update" : "Submit"}
                </Button>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            {" "}
            <Col md={2}></Col>
            <Col md={8}>
              <FormGroup>
                <Button
                  color="danger"
                  block
                  onClick={() => {
                    nav("/userlist");
                  }}
                >
                  Cancel
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
  