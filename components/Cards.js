import React from 'react';
import Card from './Card';

const Cards = () => {
    return (
        <div className='text-center mt-5'>
            <h1>Our Top <span className='underline--magical'>Casinos</span> </h1>
            <h3>Cards Here</h3>
            <div>
                {/* {
                    Bets.slice(0, num).map(bet => <Card
                        key={bet.id}
                        bet={bet}
                    />)
                } */}
            </div>
        </div>
    );
};

export default Cards;