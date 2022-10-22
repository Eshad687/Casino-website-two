import React from 'react';
// http://cryptoicons.co/

const Curriencies = ({ taka }) => {
    return (
        <>
            <div style={{padding:'1px'}}>
                <img src={taka} width='25px' height='25px' />
            </div>
        </>
    );
};

export default Curriencies;