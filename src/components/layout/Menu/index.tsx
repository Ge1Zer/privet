import React from 'react'
import MenuView from './view/MenuView';
import ProfileView from './view/ProfileView';

const MenuCase: React.FC = (props: any) => {
   console.log('1')
   return (
       <>
          <nav>
              <MenuView />
          </nav>
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