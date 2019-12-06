import React from 'react';
import { Nav, Media } from 'react-bootstrap';

function Footer() {
    return (
        <div className="App-footer">
            <header className="foot">
                <Nav className="justify-content-center" activeKey="/home">
                    <Media>
                        <div className="item">
                            <h6 className="align-text-center mr-1">Developed by: Allan Vivekananda, João Pedro Santos, Jully Ketely, Luiz Felipe Antunes</h6>
                            <h6 className="align-text-center mr-1">Projeto LevelUP - Squadra Tecnologia</h6>
                        </div>
                            
                    </Media>
                </Nav>
            </header>
        </div>
    );
}

export default Footer;