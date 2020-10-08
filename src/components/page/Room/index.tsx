import React from 'react'
import './styles/styles.scss'
import { withRouter } from "react-router";
import { inject, observer } from 'mobx-react';
import FieldCase from './view/FieldCase';
import MessagesCase from './view/MessagesCase';
import TitleCase from './view/TitleCase';

const RoomCase: React.FC = inject('store')(observer((props: any) => {

    return (
        <article>
            <TitleCase />
            <MessagesCase />
            <FieldCase />
        </article>
    )
}))
export default withRouter(RoomCase);