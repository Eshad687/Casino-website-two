import React from 'react';
import styles from '../styles/Card.module.css';
import Rating from '@mui/material/Rating';
import img1 from '../assets/images/Cards/1.png';
import img2 from '../assets/images/Cards/2.png';
import img3 from '../assets/images/Cards/3.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Card = (props) => {
    const router = useRouter();
    const { title, siteLink, image, rating, review, reviewerLink, checklist, casinoName, speciality, spanish } = props.bet;
    const newRating = ((rating / 10) * 5);

    const handleClick = (e) => {
        e.preventDefault();
        // console.log(casinoName);
        router.push(`/Casinos/${casinoName}`);
    }
    return (
        <div id={`${speciality && "contain"}`} className='container px-0 styles.dash-card' style={{ display: 'flex', justifyContent: 'center', margin: '20px auto' }}>

            {/* {speciality && <div id="label" className='p-1 '>{speciality}</div>} */}

            <div className={`card w-100 ${speciality && "border-1"}`}>
                <div className="card-body ">
                    <div className='row'>
                        <div className='col-md-2'>
                            <img src={image} className="img-fluid p-1" alt={casinoName} />
                        </div>
                        <div className='col-md-3'>
                            {/* <a href={siteLink} className="btn" target="_blank" rel="noreferrer" style={{}}><h5 className="text fw-bold text-start">{title}</h5></a> */}
                            <div className='d-flex flex-column align-items-center' >
                                {
                                    checklist[0] ?
                                        <small className="d-flex align-items-center"><span className="ms-1">{checklist[0]}</span></small>
                                        :
                                        <></>
                                }
                                {
                                    checklist[1] ?
                                        <h2 className="d-flex align-items-center"><span className="ms-1">{checklist[1]}</span></h2>
                                        :
                                        <></>
                                }
                                {
                                    checklist[2] ?
                                        <small className="d-flex align-items-center"><span className="ms-1">{checklist[2]}</span></small>
                                        :
                                        <></>
                                }
                                {/* {checklist.map((check, idx) =>
                                    <div key={idx} className="ps-3">
                                        <small className="d-flex align-items-center"><span className="ms-1">{check}</span></small>
                                    </div>
                                )} */}
                            </div>
                        </div>
                        <div className='col-md-3 d-flex align-items-center justify-content-center'>
                            <div className="row">
                                <div className='col-md-5'>
                                    <Image src={img1} className="img-fluid p-1" alt="bitcoin logo" />
                                </div>
                                <div className='col-md-4'>
                                    <Image src={img2} className="img-fluid p-1" alt="Cascaro Egaming" />
                                </div>
                                <div className='col-md-3'>
                                    <Image src={img3} className="img-fluid p-1" alt="SSL Verified Certificate" />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-1 d-lg-flex align-items-center'>
                            <div className='p-2 mb-2 border'>
                                <h4 className='text-center'>{newRating}</h4>
                                <div>
                                    <Rating sx={{
                                        '& .MuiRating-iconFilled': {
                                            color: '#ffc107',
                                        }
                                    }}
                                        name="read-only"
                                        max={5}
                                        value={newRating}
                                        precision={0.5}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 d-lg-flex align-items-center justify-content-center'>
                            <div className="d-flex flex-column">
                                <div>
                                    <a href={siteLink} target="_blank" rel="noreferrer" style={{}} className={`${styles.dash} btn text-white d-flex align-items-center justify-content-center`}>JOIN HERE</a>
                                </div>
                                <div>
                                    {reviewerLink ? <a className='text-decoration-none text' target="_blank" rel="noreferrer" onClick={handleClick} >{casinoName}</a> : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Card;