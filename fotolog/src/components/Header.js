import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Header = () => (
    <header className="header" style={{ padding: '20px', background: '#222', color: 'white'}}>
        <Container>
            <Row className="align-items-sm-center justify-content-sm-center">
                <Col>
                    <h1>Fotolog</h1>
                </Col>
            </Row>
        </Container>
    </header>
)
export default Header;