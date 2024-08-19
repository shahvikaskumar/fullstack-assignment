import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.svg';
import {Navbar, Nav} from 'react-bootstrap';

const Header = ({searchstr, setsearchstr, handlesearch}) => {
    return(
        <div className="bg-body-secondary p-3">
            
            {/* Navigation bar with branding and links */}
            <Navbar className='bg-black px-5 rounded-top-4'>           
                <Navbar.Brand className='ms-5 me-3 ps-5 text-white py-2 fw-bold' href="/">
                <img className='text-white' src={logo} alt="logo" style={{width:"150px" }}/>
                </Navbar.Brand>            
                <Nav className='ms-0 me-5 align-items-center pe-5 justify-content-between w-100'>
                    <Nav.Link className=' py-0 ps-3 text-white border-start border-2 fs-4' href="/">Help Center</Nav.Link>
                    <Nav.Link className=' py-2 px-4 me-5 text-white bg-dark border-secondary border border-3 rounded-3 fs-5' href="/">Submit a request</Nav.Link>
                </Nav>           
            </Navbar>
            
            {/* Search section with input and button */}
            <div className='my-5 py-5 text-center'>
                <p className='display-2 fw-semibold mt-4'>How can we help?</p>
                <div className='m-auto mt-4 w-50 d-flex justify-content-center align-items-center'>
                    
                    {/* Search input */}
                    <input type="text" className='form-control w-75 flex-1 fs-5 py-2 px-3' placeholder='Search' onChange={(e) => setsearchstr(e.target.value)} value={searchstr} />
                    
                    {/* Search button */}
                    <button className='btn btn-transparent rounded-0' style={{marginLeft:"-45px"}} onClick={handlesearch}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Header;