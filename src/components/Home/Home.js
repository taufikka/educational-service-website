import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Home = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        // data load
        fetch('/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <div>
                {/* course title and information */}
                <section className='m-4 text-center border border-success'>
                    <h1 className='fw-bold'>English Learning Courses</h1>
                    <p className='fs-5'>Want to travel the world? Language teaching could be the answer. Learn how to teach languages effectively, including English.</p>
                </section>
                {/* popular courses card */}
                <section className='ms-4'>
                    <h3 className='fw-bolder fs-4'>Most Popular Courses:</h3>
                    <p className='fs-5 text-secondary'>Learn new skills, pursue your interests or advance your career with our short online courses.</p>
                </section>
            </div>
            <Container className='mt-4'>
                <Row xs={1} md={2} className="g-4">
                    {
                        courses?.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;