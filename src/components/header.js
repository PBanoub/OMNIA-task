import React from 'react';
import {DropdownButton,Dropdown,MenuItem,Glyphicon,Button} from 'react-bootstrap';
import '../assets/styles/header.css';

export default class Header extends React.Component {
    
    render() {
        return (
            <header className="App-header">
                <div className="container">
                    {/* // =====Language DropDown                 */}
                    <Dropdown id="Language-dropdown" bsStyle="Default">
                        <Dropdown.Toggle>
                            <Glyphicon glyph="menu-down" className="lang-ico pull-right"/>
                            En
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <MenuItem eventKey="1">Ar</MenuItem>
                            <MenuItem eventKey="2">Deu</MenuItem>
                            <MenuItem eventKey="3" active>En</MenuItem>
                            <MenuItem eventKey="4">Fr</MenuItem>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button bsStyle="primary" className="menu-ico pull-right">
                        <Glyphicon glyph="menu-hamburger"/>
                    </Button>
                </div>
            </header>
        )
    }
}