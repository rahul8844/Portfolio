import React, { useState } from 'react';
import './ProfileImage.css';
import ProfilePicture from '../../assets/ProfilePicture.jpeg';
import ModalPicture from '../../assets/ModalPicture.jpeg';
import { ProfileImageModal } from './components/ProfileImageModal';

export const ProfileImage = () =>{
    const [showModal, setShowModal] = useState(false);
    return(
        <>
            <img src={ProfilePicture} alt={''} className={'image-style'} onClick={()=>setShowModal(true)}/>
            <ProfileImageModal src={ModalPicture} open={showModal} close={()=>{setShowModal(false)}}/>
        </>
    )
}