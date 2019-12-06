import React, { Components } from 'react';
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
            <div>
            <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
            </div>
        </div>
    );
}

export default Menu;