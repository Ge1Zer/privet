import React from 'react'
import './styles/styles.scss'
import MessItemCase from './view/MessItenCase';

const MessagesCase: React.FC = (props: any) => {

    return (
        <div className="room-messages">
            <ul>
                <li><MessItemCase /></li>
                <li><MessItemCase /></li>
                <li><MessItemCase /></li>
            </ul>
        </div>
    )
}
export default MessagesCase;