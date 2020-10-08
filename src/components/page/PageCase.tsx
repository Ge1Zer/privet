import React from 'react'
import MenuCase from './Menu'
import ProfileCase from './Profile'
import RoomCase from './Room'

const PageCase : React.FC = () =>{
    return(
        <>
            <MenuCase />
            <RoomCase />
            <ProfileCase />
        </>
    )
}
export default PageCase;