import React from "react";
import {Navbar,Nav} from "react-bootstrap";

function Navb(){
  return(
    <div>
  <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="/">Medical System</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/createProfile">Add Patient</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
    )

}
export default Navb