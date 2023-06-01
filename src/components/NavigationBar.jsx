import React from "react";
import { Nav, Navbar, Container, Button, Form, NavDropdown } from "react-bootstrap";
import "../style/Navbar.css";

function NavigationBar() {

  return (
    <Navbar bg="light" expand="lg" fixed="top" z-index='100' >
      <Container className="Container">
        <Navbar.Brand href="#NavbarBrand" className="Navbar Brand text-success" id="NavbarBrand">
         PP.NURUL IMAN
        </Navbar.Brand>
        <Navbar.Toggle className="Toggle" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="Navul me-auto my-2 my-lg-0 navbar-light" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#Home">Beranda</Nav.Link>
            <Nav.Link href="#About">Tentang Kami</Nav.Link>
            <NavDropdown title="Lembaga" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/D8AA2298-3EA0-4148-82E5-75BFFDADBA44">SMPI NURUL IMAN</NavDropdown.Item>
              <NavDropdown.Item href="https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/327849c4-8ab4-4565-9402-4304ada894ec">SMKI NURUL IMAN</NavDropdown.Item>
              <NavDropdown.Item href="https://vymaps.com/ID/Pp-Nurul-Iman-Gebangan-300586127093740/">PONPES SALAFIYAH NURUL IMAN</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" variant="primary">Pendaftaran</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Contact">
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="primary" href="#">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
