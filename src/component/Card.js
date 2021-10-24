import React from 'react';
import { Card, Col } from 'react-bootstrap';

const CompCard = ({ datas }) => {
  return (
    <div>
      <Col>
        <Card style={{ width: '22rem' }} className="mb-5">
          <Card.Img variant="top" src={datas.urlToImage} />
          <Card.Body>
            <Card.Title>{datas.title}</Card.Title>
            <Card.Text>{datas.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>


    </div>
  )
}

export default CompCard;
