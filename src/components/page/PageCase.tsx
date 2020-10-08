import React from 'react'
import MenuCase from '../layout/Menu'
import RoomCase from './Room'

const PageCase: React.FC = () => {
    return (
        <MenuCase>
            <RoomCase />
        </MenuCase>
    )
}
export default PageCase;