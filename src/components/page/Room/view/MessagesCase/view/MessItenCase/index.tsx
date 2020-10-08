import React from 'react'
import './styles/styles.scss'


const MessItemCase: React.FC = (props: any) => {
    return (
        <li className="message">
            <div className="message__avatar">
                <img src="http://dummyimage.com/40x40" alt="logo" />
            </div>

            <div className="message__desc">
                <div className="message__name">
                    игорь
                </div>
                <div className="message__text">
                    text
                </div>
            </div>
        </li>
    )
}
export default MessItemCase;