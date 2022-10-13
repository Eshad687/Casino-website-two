import React, { useEffect, useState } from 'react';
import Card from './Card';


const Cards = ({ casinos }) => {
    // console.log(casinos);
    const [limitedCasinos, setLimitedCasinos] = useState(casinos.slice(0, 6));
    const [num, setNum] = useState(6);
    const [flag, setFlag] = useState(true);
    const handleCasinos = () => {
        if(num<=11){
            setNum(num+2);
        }
    };
    useEffect(() => {
        if(num>11){
            setFlag(false);
        }
        setLimitedCasinos(casinos.slice(0, num));
    },[num])

    return (
        <div className='text-center my-5 ff '>
            <div className="pb-5">
                <div className="ribbon">
                    Our Top Casinos
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </div>
            <div className='mt-3'>
                {
                    limitedCasinos && limitedCasinos.map(bet => <Card
                        key={bet.id}
                        bet={bet}
                    />)
                }
            </div>
            <div>
                {
                    flag?
                    <h6 className='show-more mt-5' onClick={handleCasinos}>Show More Casinos</h6>
                    :
                    <></>
                }
                
            </div>
        </div>
    );
};


export default Cards;