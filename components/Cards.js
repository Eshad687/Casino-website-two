import React from 'react';
import Card from '../components/Card';


const Cards = ({ casinos }) => {
    // console.log(casinos);
    return (
        <div className='text-center mt-5'>
            <h1>Our Top <span className='underline--magical'>Casinos</span> </h1>
            <h3>Cards Here</h3>
            <div className='container' style={{backgroundColor:"#484848", color:'white', paddingTop:'3px'}}>
                <div className='row'>
                    <div className='col-md-2'>
                        <p>Bitcoin Casinos</p>
                    </div>
                    <div className='col-md-3'>
                        <p>Deposit Bonus</p>
                    </div>
                    <div className='col-md-3'>
                        <p>The Casino Is Approved By</p>
                    </div>
                    <div className='col-md-1'>
                        <p>Rating</p>
                    </div>
                    <div className='col-md-3'>
                        <p>Secure Link</p>
                    </div>
                </div>
            </div>
            <div>
                {
                    casinos.map(bet => <Card
                        key={bet.id}
                        bet={bet}
                    />)
                }
            </div>
        </div>
    );
};


export default Cards;