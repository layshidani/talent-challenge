import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

function Order(props) {
  const { clientName, cart, timeStamp, id } = props.order;
  return (
    <Card style={{ width: '30%', margin: '10px 2px' }}>
      <Card.Header className='text-capitalize d-flex'>
        <span className='ml-auto p2'>{clientName}</span>
      </Card.Header>
      <ListGroup className="list-group-flush">
        {
          cart.map(item => <ListGroupItem key={item.key}>{item.amount} x {item.name}</ListGroupItem>)
        }
      </ListGroup>
      <Card.Body className="text-center d-flex align-items-end justify-content-center">
        <Button style={{width: '98%'}} variant="dark" onClick={() => props.onClick(id)} >Fechar Pedido</Button>
      </Card.Body>
    </Card>)
}
export default Order;
