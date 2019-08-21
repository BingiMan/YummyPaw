import React from  'react'
import {Link} from 'react-router-dom'
import './headerStyle.css'

export default class Hamburger extends React.Component{





    render(){
        return(
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <Link to="/">
                        <li >
                            <div className="li-home"><p>Home</p></div>
                        </li>
                    </Link>
                    <Link to="/categories">
                        <li>
                            <div className="li-categories"><p>Categories</p></div>
                        </li>
                    </Link>
                    <Link to="/addPet">
                        <li>
                            <div className="li-addPet"> <p>Add Pet</p> </div>
                        </li>
                    </Link>
                    <Link to="/Contact">
                        <li>
                            <div className="li-contact"><p>Contact</p></div>
                        </li>
                    </Link>
                </ul>
            </div>
        )
    }
}