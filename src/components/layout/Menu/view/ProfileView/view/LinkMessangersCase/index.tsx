import React from 'react'
import './styles/styles.scss'
const LinkMessagers : React.FC = () =>{
    return (
        <ul className="link-mesger">
            <li className="link-mesger__item">
            <img src="http://dummyimage.com/40x40" alt="logo"/>

            </li>
            <li className="link-mesger__item">
            <img src="http://dummyimage.com/40x40" alt="logo"/>
            </li>
            <li className="link-mesger__item">
            <img src="http://dummyimage.com/40x40" alt="logo"/>
            </li>
            <li className="link-mesger__item">
            <img src="http://dummyimage.com/40x40" alt="logo"/>
            </li>
        </ul>
    )
}
export default LinkMessagers;