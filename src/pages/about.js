import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class About extends React.Component {
    render() {
        return (
            <Container className='p-1'>
                <Row className='justify-content-center text-center py-3'>
                    <Col md={9}>
                        <h1 className='title'>About</h1>
                        <h2 className='subtitle'>Food Finder: A Project by Tom Sanderson</h2>
                        <hr />
                        <br/>
                        <p>
                            The Food Finder app was created to help people find the best restaurants in 
                            major cities across Canada and the United States. 
                            It was built with React/Redux, Bootstrap 4 and restaurant data pulled from the 
                            <a href='https://opentable.herokuapp.com/'> Opentable API</a>. 
                        </p>
                        <br />
                        <p>
                            Send questions and inquiries to Tom at <span className='text-primary'>twjsanderson@yahoo.ca</span> 
                            or checkout his <a href='https://portfolio-8af66.firebaseapp.com/'>portfolio</a>. 
                            To look at the Food Finder source code take a look at his Github Repo.
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default About;