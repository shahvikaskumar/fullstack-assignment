import {Navbar, Nav, Row, Col} from 'react-bootstrap';
import logo from '../images/favicon.png';

const Footer = () => {
    return(
        <div className='bg-body-secondary p-3'>
            
            {/* Footer navigation bar */}
            <Navbar className='bg-black px-5 py-5 rounded-bottom-4'>                           
                <Col lg={10}>
                    <Row className='mx-5  px-5 text-white justify-content-center w-100'>
                        
                        {/* Abstract section with links */}
                        <Col lg={3} md={6}>
                            <h3 className='mb-3'>Abstract</h3>
                            <Nav.Link className='fs-5' href="/">Branches</Nav.Link>
                        </Col>

                        {/* Resources section with links */}
                        <Col lg={3} md={6}>
                            <h3 className='mb-3'>Resources</h3>
                            <Nav.Link className='fs-5' href="/">Blog</Nav.Link>
                            <Nav.Link className='fs-5' href="/">Help Center</Nav.Link>
                            <Nav.Link className='fs-5' href="/">Release Notes</Nav.Link>
                            <Nav.Link className='fs-5' href="/">Status</Nav.Link>
                        </Col>

                        {/* Community section with links */}
                        <Col lg={3} md={6} >
                            <h3 className='mb-3'>Community</h3>
                            <Nav.Link className='fs-5' href="/">Twitter</Nav.Link>
                            <Nav.Link className='fs-5' href="/">Linkdin</Nav.Link>
                            <Nav.Link className='fs-5' href="/">Facebook</Nav.Link>
                            <Nav.Link className='fs-5' href="/">Dribbble</Nav.Link>
                            <Nav.Link className='fs-5' href="/">Podcast</Nav.Link>
                        </Col>

                        {/* Company section with links and contact info */}
                        <Col lg={3} md={6}>
                            <h3 className='mb-3'>Company</h3>
                            <Nav.Link className='fs-5' href="/">About Us</Nav.Link>
                            <Nav.Link className='fs-5' href="/">Careers</Nav.Link>
                            <Nav.Link className='fs-5' href="/">Legal</Nav.Link>

                            <h4 className='mt-5'>Contact Us</h4>
                            <Nav.Link className='fs-5 pb-5' href="/">info@abstract.com</Nav.Link>
                            
                        </Col>
                    </Row>
                </Col>            

                {/* Footer logo and copyright info */}
                <Col lg={2} className='position-absolute pb-5 end-0 bottom-0 pe-5'>
                <img src={logo} alt="logo" style={{ filter: 'invert(1)' }} />
                
                <p className='text-white fs-5 mb-0'>&copy; Copyright 2022</p>
                <p className='text-white fs-5 mb-0'>Abstract Studio Design, Inc.</p>
                <p className='text-white fs-5 mb-0'>All rights reserved</p>
                </Col>
                    
            </Navbar>            
        </div>
    )
};

export default Footer;