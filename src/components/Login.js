import React, { useState } from "react";
import { Card, Form, Button, Container ,FloatingLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState("");

    const emailValue ="admin@edge.com";
    const passwordValue = "password@123";

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email === emailValue && password === passwordValue){
            navigate("/home");
        }else{
            setError("Invalid Email or Password");
        }
        console.log("Login attempted with:", { email, password });
      };
  return (
    <div
    className="d-flex justify-content-center align-items-center vh-100"
    style={{
      backgroundImage: `url("https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
        <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "25rem" }} className="shadow">
        <Card.Body>
          <h2 className="text-center mb-4">Login AttendX</h2>
          {error && <p className="text-danger">{error}</p>} {/* Show error message */}
          <Form onSubmit={handleSubmit}>
            {/* Email Input */}
            {/* <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group> */}

        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}
         required/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password" className="mb-2">
        <Form.Control type="password" placeholder="Password" 
         onChange={(e) => setPassword(e.target.value)}
          required/>
      </FloatingLabel>

            {/* Password Input */}
            {/* <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group> */}

            {/* Submit Button */}
            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
 
    </div>
  )
}

export default Login