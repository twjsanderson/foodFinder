import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchRestaurant, setModalShow, incrementRestaurants, decrementRestaurants } from '../actions';

// Components
import ListView from './list.component';
import DetailsModal from '../detailsModal';

class List extends React.Component {

    restaurantDetails = (id) => {
        this.props.fetchRestaurant(id)
        this.props.setModalShow(true)
    }

    render() {
        return (
            <Container>
                <ul>
                    {
                        this.props.refined.length > 0 ?
                            this.props.refined.map(restaurant => {
                                return (
                                    <ListView 
                                        key={restaurant.id}
                                        restaurant={restaurant} 
                                        refined={true} 
                                        restaurantDetails={this.restaurantDetails}
                                    />
                                )
                            }) : this.props.restaurants.length > 0 ? 
                                this.props.restaurants.map(restaurant => {
                                    return (
                                        <ListView 
                                            key={restaurant.id}
                                            restaurant={restaurant} 
                                            refined={false} 
                                            restaurantDetails={this.restaurantDetails}
                                        />
                                    )
                                }) : 
                                <h4 className='text-center p-2 mr-5 text-primary'>Start by entering your city name!</h4>
                    }
                </ul>
                <Row>
                    <Col className='text-left'>
                        {
                            this.props.refined.length > 0 || this.props.restaurants.length > 0 ?
                                <Button variant='secondary' onClick={() => this.props.decrementRestaurants()}>Back</Button> :
                                null
                        }
                    </Col>
                    <Col className='text-right'>
                        {
                            this.props.refined.length > 0 || this.props.restaurants.length > 0 ?
                                <Button variant='secondary' onClick={() => this.props.incrementRestaurants()}>Next</Button> :
                                null
                        }
                    </Col>
                </Row>
                <DetailsModal
                    id={this.props.restaurants}
                    show={this.props.modalShow}
                    onHide={() => this.props.setModalShow(false)}
                />
            </Container>
        );
    }
};

const mapStateToProps = (state) => {
    return { 
        restaurants: state.restaurants,
        refined: state.refined,
        modalShow: state.modalShow
    }
};

const mapDispatchToProps = ({
    fetchRestaurant,
    setModalShow,
    incrementRestaurants,
    decrementRestaurants
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
