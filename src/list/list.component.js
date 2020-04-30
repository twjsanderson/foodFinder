import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

class ListView extends React.Component {
    render() {
        return (
            <section>
                <Container>
                    <Row>
                        <Col md={4}>
                            <img 
                                src={this.props.restaurant.image_url}
                                className='img-fluid p-2'
                                alt='city restaurant'
                            /> 
                        </Col>
                        <Col md={8} key={this.props.restaurant.id} className='p-3'>
                            <Row>
                                <h5>
                                    <strong>Name:</strong>
                                </h5> 
                                <h5 className='pl-2'>
                                    {this.props.restaurant.name}
                                </h5>
                            </Row>
                            <Row>
                                <h5>
                                    <strong>Address:</strong>
                                </h5> 
                                <h5 className='pl-2'>
                                    {this.props.restaurant.address}
                                </h5>
                            </Row>
                            <Row >
                                <h5>
                                    <strong>Price:</strong>
                                </h5> 
                                <h5 className='pl-2'>
                                    {this.props.restaurant.price}
                                </h5>
                            </Row>
                            {
                                this.props.refined ?
                                (
                                    <>
                                        <Row> 
                                            <h5>
                                                <strong>Postal Code:</strong>
                                            </h5> 
                                            <h5 className='pl-2'>
                                            {this.props.restaurant.postal_code}
                                            </h5>
                                        </Row>
                                        <Row> 
                                            <h5>
                                                <strong>Area:</strong>
                                            </h5> 
                                            <h5 className='pl-2'>
                                                {this.props.restaurant.area}
                                            </h5>
                                        </Row>
                                    </>
                                ) : 
                                null
                            }  
                            <Row>
                                <Button 
                                    onClick={() => this.props.restaurantDetails(this.props.restaurant.id)}
                                >
                                    Details
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
};

export default ListView;    