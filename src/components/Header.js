import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component{
    render(){
      return (
            <header className="">
                <nav className="myheader navbar navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">
                        {/* <img src="" className="img-responsive" alt="logo" height="35" width="50"/> */}
                        <span className="navbar-brand">newag</span></Link>
                        
                {/*    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="nav navbar-nav float-right">
                            <li>
                            <Link className="navbar-brand menu-color" to="/links">Ärzte</Link>
                            </li>
                            <li>
                            <Link className="navbar-brand" to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                            <Link className="navbar-brand" to="/login">Login</Link>
                            </li>
                            <li>
                            <Link className="navbar-brand" to="/signup">Registrieren</Link>
                            </li>
                        </ul>
                    </div>*/}
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button> */}
                    {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
                        <ul className="nav navbar-nav float-right">
                            <li>
                            	<Link className="navbar-brand menu-color" to="/meinepatienten">Meine Patienten</Link>
                            	<Link className="navbar-brand menu-color" to="/termine">Termine</Link>
                            	<Link className="navbar-brand menu-color" to="/patiententermin">Patiententermin</Link>
                            </li>
                        </ul>
                    {/* </div> */}

                </nav>

            </header>
            
      );
    }
  }