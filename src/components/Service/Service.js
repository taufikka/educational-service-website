import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { course, image, price } = props.course;

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className='fs-4 fw-bold'>{course}</Card.Title>
                        <Card.Text className="border w-25 text-center text-danger fw-bolder">
                            Price: ${price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Service;