import React from 'react';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import Navbarr from './Navbarr';
import image1 from "../assets/images/lg.jpg"
import image2 from "../assets/images/sm.jpg"
import Image from 'next/image';
import { Rating } from '@mui/material';
const Banner = () => {
    return (
        <div className='banner'>
            <Navbarr />
            <div className="pt-5">

            </div>
            <div className="container py-5">
                <Row className="">
                    <Col md={6} className=" mt-3 px-5">
                        <Card className=' top-card '>
                            <small className='text-center px-2 best w-50'>Best Overall</small>
                            <div className='py-3 d-flex justify-content-around'>
                                <img className="border border-circle" width="30%" height="30%" src="https://i.ibb.co/84GH8F4/justbit-casino-logo.png" alt="" />
                                <div>
                                    <h5 className=' '>Justbit Casino</h5>
                                    <Rating name="read-only" value={4} readOnly />
                                    <h6 className='my-3'>10% Cashback —  <br /> Lifetime duration</h6>
                                    <Button className=' top-button border-0 mt-3 text-right'>Bet Now</Button>
                                </div>

                            </div>

                        </Card>

                    </Col>
                    <Col md={6} className="mt-3" style={{ height: "425px" }}>
                        <span className="block-helpline__item-title mx-2 mx-md-0 text-white">Best Crypto Sports Betting Sites</span>
                        <span className="block-helpline__item-subHeader mx-2 mx-md-0 text-white">Best Sites - August 2022</span>

                        <span className="block-helpline__item-details my-4 mx-2 mx-md-0 w-75 text-white">
                            We have been distributing an outstanding QUALITY of products in the outomotive market - specializing
                            in the remanufacture, supply and servicing of diesel fuel injections and automotive vehicle parts
                            and accessories.
                        </span>


                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Banner;