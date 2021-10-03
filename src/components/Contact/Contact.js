import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <section className='section'>
                <h1 className='fw-bold'>Contact Us</h1>
                <p className='fs-5'>Get a best support now!</p>
            </section>

            <section className='d-flex justify-content-around mt-4 p-2'>
                <div>
                    <i className="fas fa-map-marker-alt fs-3 text-danger mb-2"></i>
                    <h5 className='fw-bolder'>Location</h5>
                    <p>
                        Bangladesh <br />
                        Gec more, Chattogram.
                    </p>
                </div>
                <div>
                    <i className="fas fa-envelope fs-3 text-danger mb-2"></i>
                    <h5 className='fw-bolder'>Email</h5>
                    <p>
                        Info@edumig20.Com <br />
                        Contact with us when you need anything.
                    </p>
                </div>
                <div>
                    <i className="fas fa-phone-square-alt fs-3 text-danger mb-2"></i>
                    <h5 className='fw-bolder'>Phone</h5>
                    <p>
                        +90 1234 567 89<br />
                        Also contact with us on skype.
                    </p>

                </div>
            </section>
        </div>



    );
};

export default Contact;