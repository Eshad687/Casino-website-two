import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Navbarr from './Navbarr';
const Banner = () => {
    return (
        <div className="text-white banner">
            <Navbarr />
            <Container>
                <Row className='pt-5'>
                    <Col className=" text-center mt-5 pt-5" sm={6}><h1  >BE THE CASINO
                        <br />
                        STAR AND SHINE</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        {/* <Button variant="danger">Danger</Button> */}
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Banner;