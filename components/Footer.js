import { Grid } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div style={{ background: "#1e2327" }} className='text-white p-0'>
            <Container className="py-5">
                <h2 className="mb-4">Best Gamble Casinos</h2>
                <span className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloremque ad dolor nulla inventore, minima pariatur sit neque aut, ex quos rerum. Similique praesentium esse laudantium, reprehenderit obcaecati iste eos.</span>
                <div className="my-5">
                    <Grid container>
                        <Grid item xs={12} md={6} lg={3}>
                            <h6>Lorem Ipsum</h6>
                            <div>Lorem Ipsum</div>
                            <div>Lorem Ipsum</div>
                            <div>Lorem Ipsum</div>
                            <div>Lorem Ipsum</div>

                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <h6>Lorem Ipsum</h6>
                            <div>Lorem Ipsum</div>
                            <div>Lorem Ipsum</div>
                            <div>Lorem Ipsum</div>
                            <div>Lorem Ipsum</div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <h6>Lorem Ipsum</h6>
                            <div>Lorem Ipsum</div>
                            <div>Lorem Ipsum</div>
                            <div>Lorem Ipsum</div>
                            <div>Lorem Ipsum</div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <h6>Lorem Ipsum</h6>
                            <div>Lorem Ipsum</div>
                            <div>Lorem Ipsum</div>
                            <div>Lorem Ipsum</div>
                            <div>Lorem Ipsum</div>
                        </Grid>

                    </Grid>
                </div>
            </Container>

        </div>
    );
};

export default Footer;