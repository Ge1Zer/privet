import React from 'react'
import ListFriend from './ListFriend'
import ListRoom from './ListRoom'
import LogoCase from './LogoCase'
import './styles/styles.scss'

const MenuView : React.FC = () =>{
    return (
        <div className="header">
          <div className="header__logo logo">
              <LogoCase />
          </div>
          <nav className="header__navbar navbar">
              <ListRoom />
              <ListFriend />     
          </nav>                   
        </div>
    )
}
export default MenuView;