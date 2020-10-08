import { inject,observer } from 'mobx-react';
import React from 'react'

const MenuCase : React.FC =inject('store')(observer((props:any) =>{
    console.log(props)
    return(
     <div>
     MenuCase
     </div>
 )
}))
export default MenuCase;