import React from 'react'
import './styles/styles.scss'
import AvatarCase from './view/AvatarCase';
import ButtonCase from './view/ButtonMessCase';
import EmailCase from './view/EmailCase';
import LinkMessagers from './view/LinkMessangersCase';
import NameCase from './view/NameCase';
import SkypeCase from './view/SkypeCase';

const ProfileView : React.FC = () =>{
    return (
        <>
            <AvatarCase />
            <NameCase />
            <LinkMessagers />
            <ButtonCase />
            <SkypeCase />
            <EmailCase />
        </>
    )
}
export default ProfileView;