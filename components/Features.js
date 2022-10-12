import React from 'react';
import Icon from '@mui/material/Icon';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

const Features = ({ productsArray }) => {
    // console.log(productsArray[0])
    return (
        <>
            {
                productsArray[0] ?
                    <div
                        style={{ display: 'flex', backgroundColor: '#1e85fe', lineHeight: '1.1', letterSpacing: '0px', fontFamily: 'Roboto, sans-serif', color: 'white', justifyContent: 'start', alignItems: 'center', padding: '3px', borderRadius: '4px', marginTop: '5px', marginBottom: '2px' }}
                    >
                        <div>
                            <DoneIcon style={{ fontSize: '15px', marginRight: '3px' }} />
                        </div>
                        <div style={{ fontSize: '11px' }}>
                            {productsArray[1]}
                        </div>
                    </div>
                    :
                    <div
                        style={{ display: 'flex', backgroundColor: '#f6f8fa', lineHeight: '1.1', letterSpacing: '0px', fontFamily: 'Roboto, sans-serif', color: 'black', justifyContent: 'start', alignItems: 'center', padding: '3px', borderRadius: '4px', marginTop: '5px', marginBottom: '2px' }}
                    >
                        <div>
                            <CloseIcon style={{ fontSize: '15px', marginRight: '3px' }} />
                        </div>
                        <div style={{ fontSize: '11px' }}>
                            {productsArray[1]}
                        </div>
                    </div>
            }
        </>
    );
};

export default Features;