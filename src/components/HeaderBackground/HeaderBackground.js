import React from 'react';
import ProfileLogo from '../../assets/profilelogo.png';
import './HeaderBackground.css';

export const HeaderBackground = () =>{
    return (
        <div className="headerBackground">
            <div className="profile-logo">
                <img src={ProfileLogo} alt={''} style={{height: '50px'}}/>
                <label style={{paddingLeft: "7px"}}>{'Rahul Gupta'}</label>
            </div>
            <div className='headings'>
                <text className='text-style'>{'Impossible is for the unwilling.'}</text>
                <text className='marker'>{'~ John Keats'}</text>
            </div>
        </div>
    );
}