import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">PeopleShop &copy; {year}</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
