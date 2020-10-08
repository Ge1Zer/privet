import React from 'react'
import ListFriend from './ListFriend'
import ListRoom from './ListRoom'
import './styles/styles.scss'

const MenuView : React.FC = () =>{
    return (
        <>
          <div className="logo">
              <p>Logo</p>
          </div>
          <nav className="navbar">
              <ListRoom />
              <ListFriend />     
          </nav>                   
        </>
    )
}
export default MenuView;