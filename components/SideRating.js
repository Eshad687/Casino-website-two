import React from 'react';
import Rating from '@mui/material/Rating';

const SideRating = ({ sidebarRating }) => {
    return (
        <div style={{width: '100%'}}>

             <div className='d-flex justify-content-between' style={{marginTop:'-5px'}}>
                <p style={{ fontSize: '13px', letterSpacing: '0px', fontWeight: '600' }}>Trust Level</p>

                <div className='d-flex'>
                    <Rating sx={{
                       '& .MuiRating-iconFilled': {
                            color: '#35c193',
                            fontSize: '12px',
                        },
                        '& .MuiRating-iconEmpty': {
                            color: '#35c193',
                            fontSize: '12px',
                        }
                    }}
                        name="read-only"
                        max={5}
                        value={(sidebarRating.TrustLevel / 10) * 5}
                        precision={0.5}
                        readOnly
                    />
                    <p style={{ fontSize: '13px', letterSpacing: '0px', fontWeight: '600', marginTop:'-5px', marginLeft:'3px'  }}>{(sidebarRating.TrustLevel / 10) * 5}</p>
                </div>
            </div>


             <div className='d-flex justify-content-between' style={{marginTop:'-15px'}}>

                <p style={{ fontSize: '13px', letterSpacing: '0px', fontWeight: '600' }}>Games Selection</p>


                <div className='d-flex justify-content-between'>
                    <Rating sx={{
                        '& .MuiRating-iconFilled': {
                            color: '#35c193',
                            fontSize: '12px',
                        },
                        '& .MuiRating-iconEmpty': {
                            color: '#35c193',
                            fontSize: '12px',
                        }
                    }}
                        name="read-only"
                        max={5}
                        value={(sidebarRating.GamesSelection / 10) * 5}
                        precision={0.5}
                        readOnly
                    />
                    <p style={{ fontSize: '13px', letterSpacing: '0px', fontWeight: '600', marginTop:'-5px', marginLeft:'3px' }}>{(sidebarRating.GamesSelection / 10) * 5}</p>
                </div>
            </div>



             <div className='d-flex justify-content-between' style={{marginTop:'-15px'}}>
                <p style={{ fontSize: '13px', letterSpacing: '0px', fontWeight: '600' }} >Bonuses</p>


                <div className='d-flex justify-content-between'>
                    <Rating sx={{
                       '& .MuiRating-iconFilled': {
                            color: '#35c193',
                            fontSize: '12px',
                        },
                        '& .MuiRating-iconEmpty': {
                            color: '#35c193',
                            fontSize: '12px',
                        }
                    }}
                        name="read-only"
                        max={5}
                        value={(sidebarRating.Bonuses / 10) * 5}
                        precision={0.5}
                        readOnly
                    />
                    <p style={{ fontSize: '13px', letterSpacing: '0px', fontWeight: '600', marginTop:'-5px', marginLeft:'3px'  }} >{(sidebarRating.Bonuses / 10) * 5}</p>
                </div>
            </div>


            <div className='d-flex justify-content-between' style={{marginTop:'-15px'}} >
                <p style={{ fontSize: '13px', letterSpacing: '0px', fontWeight: '600' }} >Performance</p>

                <div className='d-flex justify-content-between'>
                    <Rating sx={{
                       '& .MuiRating-iconFilled': {
                            color: '#35c193',
                            fontSize: '12px',
                        },
                        '& .MuiRating-iconEmpty': {
                            color: '#35c193',
                            fontSize: '12px',
                        }
                    }}
                        name="read-only"
                        max={5}
                        value={(sidebarRating.PerformanceAndOverallExperience / 10) * 5}
                        precision={0.5}
                        readOnly
                    />
                    <p style={{ fontSize: '13px', letterSpacing: '0px', fontWeight: '600', marginTop:'-5px', marginLeft:'3px'  }} >{(sidebarRating.PerformanceAndOverallExperience / 10) * 5}</p>
                </div>
            </div>

             <div className='d-flex justify-content-between' style={{marginTop:'-15px'}}>
                <p style={{ fontSize: '13px', letterSpacing: '0px', fontWeight: '600' }} >Payments</p>

                <div className='d-flex justify-content-between'>
                    <Rating sx={{
                       '& .MuiRating-iconFilled': {
                            color: '#35c193',
                            fontSize: '12px',
                        },
                        '& .MuiRating-iconEmpty': {
                            color: '#35c193',
                            fontSize: '12px',
                        }
                    }}
                        name="read-only"
                        max={5}
                        value={(sidebarRating.Payments / 10) * 5}
                        precision={0.5}
                        readOnly
                    />
                    <p style={{ fontSize: '13px', letterSpacing: '0px', fontWeight: '600', marginTop:'-5px', marginLeft:'3px'  }} >{(sidebarRating.Payments / 10) * 5}</p>
                </div>
            </div>


            <div className='d-flex justify-content-between' style={{marginTop:'-15px'}}>
                <p style={{ fontSize: '13px', letterSpacing: '0px', fontWeight: '600' }} >Customer Support</p>

                <div className='d-flex justify-content-between'>
                    <Rating sx={{
                       '& .MuiRating-iconFilled': {
                            color: '#35c193',
                            fontSize: '12px',
                        },
                        '& .MuiRating-iconEmpty': {
                            color: '#35c193',
                            fontSize: '12px',
                        }
                    }}
                        name="read-only"
                        max={5}
                        value={(sidebarRating.CustomerSupport / 10) * 5}
                        precision={0.5}
                        readOnly
                    />
                    <p style={{ fontSize: '13px', letterSpacing: '0px', fontWeight: '600', marginTop:'-5px', marginLeft:'3px'  }} >{(sidebarRating.CustomerSupport / 10) * 5}</p>
                </div>
            </div>

        </div>
    );
};

export default SideRating;