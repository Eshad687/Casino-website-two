import React from 'react';
import '../styles/card.module.css';

const Card = (props) => {
    const { title, siteLink, image, rating, review, reviewerLink, checklist, casinoName, speciality, spanish } = props.bet;

    return (
        <div id={`${speciality && "contain"}`} className='container px-0 dash-card' style={{ display: 'flex', justifyContent: 'center', margin: '20px auto' }}>

            {speciality && <div id="label" className='p-1 '>{speciality}</div>}

            <div className={`card w-100 ${speciality && "border-1"}`}>
                <div className="card-body ">
                    <div className='row'>
                        <div className='col-md-2'>
                            <img src={image} className="img-fluid p-1" alt={casinoName} />
                        </div>
                        <div className='col-md-6 '>
                            <a href={siteLink} className="btn" target="_blank" rel="noreferrer" style={{}}><h5 className="text fw-bold text-start">{title}</h5></a>
                            <div className='d-flex flex-column align-items-start' >
                                {checklist.map(check =>
                                    <div className="ps-3">
                                        <small className="d-flex align-items-center"><Checkmark size="small" /><span className="ms-1">{check}</span></small>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='col-md-2 d-lg-flex align-items-center'>
                            <div className='p-2 mb-2 border'>
                                <h4 className='text-center'>{rating}</h4>
                                <div style={{ backgroundColor: '#eaeaea' }} className="p-2">{review}</div>
                            </div>
                        </div>
                        <div className='col-md-2 d-lg-flex align-items-center'>
                            <div className="d-flex flex-column align-items-center gap-2">
                                <a href={siteLink} target="_blank" rel="noreferrer" style={{}} className="btn dash-btn text-white">Claim Bonus</a>
                                {reviewerLink ? <a className='text-decoration-none text' onClick={handleClick} target="_blank" rel="noreferrer" >{casinoName}</a> : ''}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Card;