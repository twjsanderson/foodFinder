import React from 'react';
import './index.css';
import { Container, Row, Col } from 'react-bootstrap';

// Components
import SearchBar from '../searchBar';
import List from '../list/list.container';

class Home extends React.Component {
    render() {
        return (
            <section>
                <Container className='p-1'>
                    <Row className='justify-content-center text-center py-3'>
                        <Col md={10}>
                            <h1 className='title'>Food Finder</h1>
                            <h2 className='subtitle'>Connecting hungry people with good food</h2>
                        </Col>
                    </Row>
                    <Row className='justify-content-center py-3'>
                        <Col md={10}>
                            <SearchBar />
                            <List />
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Home;