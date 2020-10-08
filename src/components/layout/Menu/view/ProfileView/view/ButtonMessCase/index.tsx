import React from 'react'
import './styles/styles.scss'

const ButtonCase : React.FC = () =>{
    return (
        <div className="profile-button">
            <button className="profile-button__message">Message</button>
            <button className="profile-button__more">more</button>
        </div>
    )
}
export default ButtonCase;