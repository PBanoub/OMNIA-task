import React from 'react';
import '../assets/styles/header.css';

export default class Footer extends React.Component {
    
    render() {
        return (
            <footer className="App-footer">
                <div className="container">
                    <span>© 2018 News. All rights reserved.</span>
                    <ul className="pull-right footer-menu">
                        <li><a>Privacy Policy</a></li>
                        <li><a>Copyright</a></li>
                        <li><a>Terms & Conditions</a></li>
                        <li><a>Contact us</a></li>
                    </ul>
                
                </div>
            </footer>
        )
    }
}

