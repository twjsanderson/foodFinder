import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchRestaurants, refineSearch } from '../actions';
import { connect } from 'react-redux'; 

class SearchBar extends React.Component {
    render() {
        return (
            <Container>
                <Row className='h-100 d-flex justify-content-center align-items-end p-2'>
                    <Col md={4}>
                        <label className='p-2'>
                            <h5><strong>City</strong></h5>
                        </label>
                        <input 
                            type='text'
                            className='input'
                            placeholder='Enter city name'
                            onChange={(e) => this.props.fetchRestaurants(e.target.value)}
                        />
                    </Col>
                    <Col md={4}>
                        <label className='p-2'>
                            <h5><strong>Filter</strong></h5>
                        </label>
                        <input 
                            type='text'
                            className='input'
                            placeholder='Search by name, address or area'
                            onChange={(e) => this.props.refineSearch(e.target.value)} 
                        />
                    </Col>
                    <Col md={4} className='text-left'>
                        <small>*Search results limited to 25 per page</small>
                    </Col>
                </Row>
            </Container>
        );
    }
};

const mapDispatchToProps = ({
    fetchRestaurants,
    refineSearch
});

export default connect(null, mapDispatchToProps)(SearchBar);