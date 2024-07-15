import React from 'react';
import '../App.css'; // Make sure this path is correct for your CSS file
import data from '../data'; // Assuming this is where your data array is located
import { Button, Col, Card, Row } from 'react-bootstrap'; // Import necessary components from react-bootstrap

function Category() {
  return (
    <div className='section'>
      <div className='my-5 mx-3'> {/* Added margin for spacing */}
        <h1 className='text-white'>Our Popular categories</h1>
      </div>
      <Row className='d-flex justify-content-center'>
        {data.map((product) => (
          <Col key={product.id} xs={12} md={6} lg={4} className='my-3'>
            <Card style={{ width: '18rem', height: '100%' }}>
              <Card.Img variant="top" src={product.image} style={{ height: '15rem', objectFit: 'cover' }} />
              <Card.Body className='d-flex flex-column justify-content-between'>
                <Card.Title>{product.title}</Card.Title>
                <Button variant="primary">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Category;
