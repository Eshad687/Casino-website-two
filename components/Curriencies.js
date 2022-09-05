import React from 'react';

const Curriencies = () => {
    return (
        <div style={{display:'flex', flexWrap: 'wrap'}}>
            <div style={{marginLeft:'-15px'}}>
                <img src='/Bitcoin.webp' width='50px' height='30px' />
            </div>
            <div style={{marginLeft:'-16px'}}>
                <img src='/Ethereum.png' width='40px' height='25px' />
            </div>
            <div style={{marginLeft:'-7px', marginTop:'-3px'}}>
                <img src='/Tether.png' width='35px' height='30px' />
            </div>
            <div style={{marginLeft:'-8px'}}>
                <img src='/USD.png' width='35px' height='30px' />
            </div>
        </div>
    );
};

export default Curriencies;