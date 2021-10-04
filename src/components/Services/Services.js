import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        // data load
        fetch('/coursesDetails.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            {/* more courses information */}
            <Container className='mt-4'>
                <Row xs={1} md={3} className="g-4">
                    {
                        courses?.map(course => <Service
                            key={course.id}
                            course={course}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;