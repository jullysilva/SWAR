import React from 'react';
import { Nav, Media } from 'react-bootstrap';
import logo from '../img/web_access.png';

function Menu() {
    return (
        <div className="App-menu">
            <header className="header">
                <Nav className="justify-content-center" activeKey="/home">
                    <Media>
                        <div className="item">
                            <img width="75%" height="120" className="align-self-center mr-0" src={logo} alt="Generic placeholder" />
                        </div>
                        <div className="item">
                        <h1 className="align-text-center mr-1">swar</h1>
                        </div>
                    </Media>
                </Nav>
            </header>
        </div>
    );
}

export default Menu;