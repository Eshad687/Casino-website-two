import React, { useState } from 'react';
import styles from '../styles/card.module.css';
import Rating from '@mui/material/Rating';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Features from './Features';
import Currencies from './Curriencies';
import SideRating from './SideRating';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddIcon from '@mui/icons-material/Add';

// http://cryptoicons.co/

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
    const { _id, id2, id3, id4, bonusTitle, screenshot, imageURL, products, rating, currencies, overView, name, siteLink, casinoName, bigImageURL, sidebarRating, basicOverview } = props.bet;
    const newRating = ((rating / 10) * 5);
    // console.log(sidebarRating)
    const handleClick = (e) => {
        e.preventDefault();
        router.push(`/Casinos/${name}`);
    }

    const handleInfo = (e) => {
        e.preventDefault();
        setDetails(true);
    }

    return (
        <div className='container' style={{ backgroundColor: '#fff', marginTop: '10px' }}>
            <div style={{ margin: '10px', padding: '15px' }}>
                <div className={styles.header0}>
                    <div style={{ display: 'flex' }}>
                        <div className={styles.number}>{_id}</div>
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
                        <img src={imageURL} layout='fill' style={{ height: '140px' }} className='img-fluid p-1' />
                    </div>
                    <div className={`${styles.header1} col-md-4`} >
                        <h5 className={styles.bonus}>Bonus</h5>
                        <h5 className={styles.catchPhrase}>{bonusTitle}</h5>
                    </div>
                    <div className='col-md-3'>
                        <div className='row'>
                            <div className={`${styles.header1} col-md-6`} >
                                <h5 className={styles.bonus}>Features</h5>
                                <div>
                                    {products && products.map((e) => (
                                        <Features key={e._id} productsArray={e} />
                                    ))}
                                </div>
                            </div>
                            <div className={`${styles.header1} col-md-6`} >
                                <h5 className={styles.bonus}>Currencies</h5>
                                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {
                                        currencies && currencies.map((e) => (
                                            <Currencies key={e._id} taka={e} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.header1} col-md-3`} >
                        {/* <div>
                            <h5 className={styles.bonus}><CheckBoxIcon style={{ fontSize: '17px', marginRight: '5px' }} />UPDATED 2 HOURS AGO</h5>
                        </div> */}

                        {details
                            ?
                            <></>
                            :
                            <div className={styles.buttonInfo} onClick={handleInfo} >
                                <div>
                                    More Info
                                </div>
                                <div>
                                    <AddIcon style={{ fontSize: '18px', fontWeight: '800', marginLeft: '80px' }} />
                                </div>
                            </div>
                        }
                        <div className={styles.buttonOrange} >

                            <div>
                                Visit {casinoName}
                            </div>
                            <div>
                                <ArrowForwardIosIcon style={{ fontSize: '18px', fontWeight: '800', marginRight: '-10px' }} />
                                <ArrowForwardIosIcon style={{ fontSize: '18px', fontWeight: '800' }} />
                            </div>
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
                            <Image src={screenshot} className={styles.screenshotImg} alt="me" width={1280} height={720} />
                        </div>
                        <div className={`${styles.header1} col-md-6`} style={{ alignItems: 'center' }}>
                            <div style={{ width: "90%", display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <h5 className={styles.bonus}>OverView</h5>
                                <h5 className={styles.text}>
                                    {overView}
                                </h5>
                                <div>
                                    <a className={`text-decoration-none text ${styles.link}`} target="_blank" rel="noreferrer" onClick={handleClick} >Read Review</a>
                                </div>
                            </div>

                        </div>
                        <div className={`${styles.header1} col-md-3`} >
                            <h5 className={styles.bonus}>RATINGS</h5>
                            <div style={{ width: '100%' }}>
                                {
                                    sidebarRating && sidebarRating.map((e) => (
                                        <SideRating key={e._id} singleSidebarRating={e} />
                                    ))
                                }
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

