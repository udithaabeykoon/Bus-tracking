import React, { Component } from 'react';


class Navbar extends Component {
    render() {
        return ( 

            <div style={{position:"fixed"}}>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Route</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Bus</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Bus Owner</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Passenger</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Schedule</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Complaint</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
            
            
            
            
        );
    }
}

export default Navbar;