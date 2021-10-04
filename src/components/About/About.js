import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../images/image.jpg'

const About = () => {
    return (
        <div>
            <Container className='mt-5'>
                <div className="row">
                    {/* information */}
                    <div className="col-md-7 mt-5">
                        <h3 className='fw-bolder'>Explore our courses and try our lessons, <br />
                            We have the best Teachers</h3>
                        <p className='mt-4 fs-5'>
                            Perfectly Spoken teachers have more than 5 years of classroom teaching experience each. <br />
                            All teachers are highly qualified and they are specialists in Cambridge English exams preparation. <br />
                            Start your journey and discover how they can help you in a selection of lessons and learning materials.
                        </p>
                    </div>
                    {/* photo */}
                    <div className="col-md-5">
                        <img className='img-fluid mt-3' src={img} alt="" />
                    </div>
                    {/* course facilities */}
                    <div className='d-flex mt-5 d-flex justify-content-between'>
                        <div>
                            <h3 className='text-danger'>Practice Tests</h3>
                            <p className='text-secondary'>Check your progress and
                                <br />
                                consolidate your learning after each lesson.</p>
                        </div>
                        <div>
                            <h3 className='text-danger'>Extra Learning Materials</h3>
                            <p className='text-secondary'>Downloadable extra learning
                                <br />
                                materials and activities.</p>
                        </div>
                        <div>
                            <h3 className='text-danger'>Certificate Of Completion</h3>
                            <p className='text-secondary'>Your official Perfectly Spoken <br />
                                Certificate of Course Completion.</p>

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;