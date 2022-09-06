import React from 'react';
import Card from './Card';


const Cards = ({ casinos }) => {
    // console.log(casinos);
    return (
        <div className='text-center my-5'>
            <h3 className="pt-3">Our Top <span className='underline--magical'>Casinos</span> </h3>
            <div className='mt-3'>
                {
                    casinos.map(bet => <Card
                        key={bet.id}
                        bet={bet}
                    />)
                }
            </div>
            <div>
                <h6 className='show-more mt-5 '>Show More Casinos</h6>
            </div>
        </div>
    );
};


export default Cards;