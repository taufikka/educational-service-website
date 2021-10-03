import React from 'react';
import './footer.css'
const Footer = () => {
    return (
        <footer>
            <div>
                <p className="ms-4 mt-4 fw-bolder">Follow us</p>
                <div className='d-flex m-3 fs-3'>
                    <i className="fab fa-facebook-square m-2"></i>
                    <i className="fab fa-twitter-square m-2"></i>
                    <i className="fab fa-linkedin-in m-2"></i>
                </div>
                <div className='text-center'>
                    {/* <input type="text" placeholder='your email' /> <br />
                    <button>Subscribe</button> */}
                    <p className='mb-3'>COPYRIGHTS EDUMIG ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;