import React from 'react';
import './ProfileImageModal.css';

export const ProfileImageModal = ({src, open, close}) =>{
    return (
        open && (
            <div className='modal'>
                <img src={src} alt={''} style={{maxHeight: "inherit"}}/>
                <button type='primary' onClick={close}>Close</button>
            </div>
        )
    )
}