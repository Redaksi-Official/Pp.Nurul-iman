
import "../style/Landingpage.css";
import { Button, Container, Row, Col } from "react-bootstrap";

const Landingpage = () => {
  return (
    <section className="Home" id="Home" h-100vh>
      <Container className="text-white mt-4">
        <Row>
          <Col>
            <div className="HomeTitle">
              NURUL IMAN <span>ISLAMIC BOARDING SCHOOL</span>
            </div>
            <div className="HomeDesc">Gebangan - Krejengan - Probolinggo</div>
            <div className="RegButton mt-4 text-center">
              <Button variant="success">Daftar</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Landingpage;
