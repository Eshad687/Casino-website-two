import React from 'react';
// http://cryptoicons.co/

const Curriencies = ({ taka }) => {
    return (
        <>
            <div style={{padding:'1px'}}>
                <img src={taka} width='25px' height='25px' />
            </div>
            {/* <div style={{marginLeft:'-16px'}}>
                <img src='/Ethereum.png' width='40px' height='25px' />
            </div>
            <div style={{marginLeft:'-7px', marginTop:'-3px'}}>
                <img src='/Tether.png' width='35px' height='30px' />
            </div>
            <div style={{marginLeft:'-8px'}}>
                <img src='/USD.png' width='35px' height='30px' />
            </div> */}
        </>
    );
};

export default Curriencies;