import React, { useState } from 'react';
import styles from '../styles/card.module.css';
import Rating from '@mui/material/Rating';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Products from './Products';
import Currencies from './Curriencies';
import SideRating from './SideRating';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddIcon from '@mui/icons-material/Add';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (

        <div className='card-header' style={{ border: 'none', marginTop: '-8px', marginBottom: '-8px', marginLeft: '-17px', marginRight: '-17px' }}>
            <button
                type="button"
                style={{ border: 'none', width: '100%', display: 'flex', fontSize: '12px', margin: '2px', fontWeight: '600', color: '#80909d' }}
                onClick={decoratedOnClick}
            >
                {children}
            </button>
        </div>

    );
}

const CardOne = (props) => {
    const [details, setDetails] = useState(false);
    const router = useRouter();
    const { title, screenshot, siteLink, image, rating, review, reviewerLink, checklist, casinoName, speciality, sidebarRating, spanish } = props.bet;
    const newRating = ((rating / 10) * 5);

    const handleClick = (e) => {
        e.preventDefault();
        // console.log(casinoName);
        router.push(`/Casinos/${casinoName}`);
    }

    const handleInfo = (e) => {
        e.preventDefault();
        setDetails(true);
    }

    return (
        <div className='container' style={{ backgroundColor: '#fff' }}>
            <div style={{ margin: '10px', padding: '15px' }}>
                <div className={styles.header0}>
                    <div style={{ display: 'flex' }}>
                        <div className={styles.number}>1</div>
                        <div className={styles.casinoname}>{casinoName}</div>
                        {/* THis will be a link to the site */}
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ paddingTop: '2px', paddingRight: '10px' }}>
                            <Rating sx={{
                                '& .MuiRating-iconFilled': {
                                    color: '#35c193',
                                    fontSize: '18px',
                                },
                                '& .MuiRating-iconEmpty': {
                                    color: '#35c193',
                                    fontSize: '18px',
                                }
                            }}
                                name="read-only"
                                max={5}
                                value={newRating}
                                precision={0.5}
                                readOnly
                            />
                        </div>
                        <div className={styles.rating}>{newRating}</div>
                    </div>
                </div>
            </div>
            <div className='container'>


                <div className='row' style={{ margin: '0px', marginTop: '-10px', paddingBottom: '25px' }}>
                    <div className='col-md-2' style={{}}>
                        <img src={image} layout='fill' style={{ height: '140px' }} className='img-fluid p-1' />
                    </div>
                    <div className={`${styles.header1} col-md-4`} >
                        <h5 className={styles.bonus}>Bonus</h5>
                        <h5 className={styles.catchPhrase}>{title}</h5>
                        <h5 className={styles.voucher}>
                            <div className={styles.code}>
                                Voucher code
                            </div>
                            <div>
                                #
                            </div>
                        </h5>
                    </div>
                    <div className='col-md-3'>
                        <div className='row'>
                            <div className={`${styles.header1} col-md-6`} >
                                <h5 className={styles.bonus}>Products</h5>
                                <Products />
                            </div>
                            <div className={`${styles.header1} col-md-6`} >
                                <h5 className={styles.bonus}>Currencies</h5>
                                <Currencies />
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.header1} col-md-3`} >
                        <div>
                            <h5 className={styles.bonus}><CheckBoxIcon style={{ fontSize: '17px', marginRight: '5px' }} />UPDATED 2 HOURS AGO</h5>
                        </div>

                        {details
                            ?
                            <></>
                            :
                            <div className={styles.buttonDiv} onClick={handleInfo}>
                                <a href="#" className={styles.buttonInfo} >
                                    <div>
                                        More Info
                                    </div>
                                    <div>
                                        <AddIcon style={{ fontSize: '18px', fontWeight: '800', marginLeft: '80px' }} />
                                    </div>
                                </a>
                            </div>
                        }

                        <div className={styles.buttonDiv}>
                            <a href="#" className={styles.buttonOrange} >

                                <div>
                                    Visit {casinoName}
                                </div>
                                <div>
                                    <ArrowForwardIosIcon style={{ fontSize: '18px', fontWeight: '800', marginRight: '-10px' }} />
                                    <ArrowForwardIosIcon style={{ fontSize: '18px', fontWeight: '800' }} />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>


                {details
                    ?
                    <div className='row' style={{ margin: '15px', paddingBottom: '40px' }}>
                        <div className={`${styles.header1} col-md-3`}>
                            <div>
                                <h5 className={styles.bonus}>SCREENSHOT</h5>
                            </div>
                            <Image src={screenshot} className={styles.screenshotImg} alt="me" width="550" height="350" />
                        </div>
                        <div className='col-md-6' >
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Card.Header>
                                        <CustomToggle eventKey="1">SPORTS BETTING</CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse className={styles.body0} eventKey="1">
                                        <Card.Body className={styles.body1}>
                                            <div>
                                                TOTAL SPORTS AVAILABLE
                                            </div>
                                            <div>
                                                All the games logos here
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                        <div className={`${styles.header1} col-md-3`} >
                            <h5 className={styles.bonus}>RATINGS</h5>
                            <SideRating sidebarRating={sidebarRating} />
                            <h5 className={styles.bonus}>OverView</h5>
                            <h5 className={styles.text}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                                <br />
                                <br />
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            </h5>
                            <div>
                                <a className={`text-decoration-none text ${styles.link}`} target="_blank" rel="noreferrer" onClick={handleClick} >Read Review</a>
                            </div>
                        </div>
                    </div>
                    :
                    <></>
                }
            </div>
        </div >
    );
}


export default CardOne;

