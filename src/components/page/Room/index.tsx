import React from 'react'
import './styles/styles.scss'
import { withRouter } from "react-router";
import { inject, observer } from 'mobx-react';

const RoomCase : React.FC = inject('store')(observer((props: any) =>{
    console.log(props.match.params.id)
 return(
     <>
     <p>RoomCase</p>
     </>
 )
}))
export default withRouter(RoomCase);