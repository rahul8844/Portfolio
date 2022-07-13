import React, { useState } from 'react';
import './ProfileImage.css';
import Image from '../../assets/MyImage.jpeg';
import { ProfileImageModal } from './components/ProfileImageModal';

export const ProfileImage = () =>{
    const [showModal, setShowModal] = useState(false);
    return(
        <>
            <img src={Image} alt={''} className={'image-style'} onClick={()=>setShowModal(true)}/>
            <ProfileImageModal src={Image} open={showModal} close={()=>{setShowModal(false)}}/>
        </>
    )
}