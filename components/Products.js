import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

const Products = () => {
    return (
        <div>
            <div style={{display:'flex',  backgroundColor: '#1e85fe', lineHeight: '1.1', letterSpacing: '0px', fontFamily:'Roboto, sans-serif', color:'white', justifyContent: 'center', alignItems: 'center', padding: '3px', borderRadius: '4px', marginTop:'5px', marginBottom:'2px'}}>
                <DoneIcon style={{fontSize:'15px', marginLeft:'-5px', marginRight:'3px'}}/>
                <div style={{fontSize:'11px'}}>
                    CASINO GAMES
                </div>
            </div>
            <div style={{display:'flex',  backgroundColor: '#80909d', lineHeight: '1.1', letterSpacing: '0px', fontFamily:'Roboto, sans-serif', color:'white', justifyContent: 'left', alignItems: 'center', padding: '3px', borderRadius: '4px', marginTop:'5px', marginBottom:'2px', width:'90%' }}>
                <CloseIcon style={{fontSize:'15px', marginLeft:'-2px', marginRight:'3px'}}/> 
                <div style={{fontSize:'11px'}}>
                    POKER
                </div>
            </div>
            <div style={{display:'flex',  backgroundColor: '#1e85fe', lineHeight: '1.1', letterSpacing: '0px', fontFamily:'Roboto, sans-serif', color:'white', justifyContent: 'center', alignItems: 'center', padding: '3px', borderRadius: '4px', marginTop:'5px', marginBottom:'2px'}}>
                <DoneIcon style={{fontSize:'15px', marginLeft:'-5px', marginRight:'3px'}}/> 
                <div style={{fontSize:'11px'}}>
                    SPORTS BETTING
                </div>
            </div>
        </div>
    );
};

export default Products;