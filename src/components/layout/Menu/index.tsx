import React from 'react'
import MenuView from './view/MenuView';
import ProfileView from './view/ProfileView';
import './styles/styles.scss'

const MenuCase: React.FC = (props: any) => {
   return (
       <>
          <header>
              <MenuView />
          </header>
          <main>
              {props.children}
          </main>
          <aside>
              <ProfileView />
          </aside>
       </>
   )
}
export default MenuCase;