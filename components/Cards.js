import React from 'react';
import Card from './Card';


const Cards = ({ casinos }) => {
    // console.log(casinos);
    return (
        <div className='text-center mt-5'>
            <h1>Our Top <span className='underline--magical'>Casinos</span> </h1>
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