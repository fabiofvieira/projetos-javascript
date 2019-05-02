import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => (
    <footer className="footer" style={{ padding: '20px', background: '#222', color: 'white'}}>
        <Container>
            <Row className="align-items-sm-center justify-content-sm-center">
                <Col>
                    <p>Feito com carinho usando <strong>React.JS e Bootstrap</strong></p>
                </Col>
            </Row>
        </Container>
    </footer>
)
export default Footer;