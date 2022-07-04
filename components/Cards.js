import React from 'react';
import Card from './Card';

import Card from './Card';

import bets from '../assets/data/data.json'

const Cards = ({ bets }) => {
    console.log(bets)
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

export const getStaticProps = async () => {
    const bets = (await import("../assets/data/data.json")).default
    return {
        bets: { bets }
    }
}
export default Cards;