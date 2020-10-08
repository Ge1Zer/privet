import React from 'react'
import './styles/styles.scss'
import MessItemCase from './view/MessItenCase';

const MessagesCase: React.FC = (props: any) => {

    return (
        <ul>
            <li><MessItemCase /></li>
        </ul>
    )
}
export default MessagesCase;