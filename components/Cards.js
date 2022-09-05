import React from 'react';
import CardOne from '../components/CardOne';


const Cards = ({ casinos }) => {
    // console.log(casinos);
    return (
        <div className='text-center mt-5'>
            <h1>Our Top <span className='underline--magical'>Casinos</span> </h1>
            <div>
                {
                    casinos.map(bet => <CardOne
                        key={bet.id}
                        bet={bet}
                    />)
                }
            </div>
        </div>
    );
};


export default Cards;