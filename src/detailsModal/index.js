import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Row } from 'react-bootstrap';

const DetailsModal = ({ onHide, restaurant, show }) => {
    return (
      <Modal
        show={show}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title >
            <h2>{restaurant.name}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className='p-2'>
            <h4>
              <strong>Addresss:</strong>
            </h4> 
            <h4 className='pl-2'>
              {restaurant.address}
            </h4>
          </Row>
          <Row className='p-2'>
            <h4>
              <strong>Postal Code:</strong>
            </h4> 
            <h4 className='pl-2'>
              {restaurant.postal_code}
            </h4>
          </Row>
          <Row className='p-2'>
            <h4>
              <strong>City:</strong>
            </h4> 
            <h4 className='pl-2'>
              {restaurant.city}
            </h4>
          </Row>
          <Row className='p-2'>
            <h4>
              <strong>State:</strong>
            </h4> 
            <h4 className='pl-2'>
              {restaurant.state}
            </h4>
          </Row>
          <Row className='p-2'>
            <h4>
              <strong>Country:</strong>
            </h4> 
            <h4 className='pl-2'>
              {restaurant.country}
            </h4>
          </Row>
          <Row className='p-2'>
            <h4>
              <strong>Phone:</strong>
            </h4> 
            <h4 className='pl-2'>
              {restaurant.phone}
            </h4>
          </Row>
          <Row className='p-2'>
            <h4>
              <strong>Price:</strong>
            </h4> 
            <h4 className='pl-2'>
              {restaurant.price}
            </h4>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

const mapStateToProps = (state) => {
  return {
      restaurant: state.details
  }
};

export default connect(mapStateToProps)(DetailsModal);