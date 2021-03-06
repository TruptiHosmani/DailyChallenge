import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './views/Counter'
import Todo from './views/Todo'
import Store from './Store'
import Fruit from './views/Fruit'
import SecondFruit from './views/SecondFruit'
import Posts from './views/Posts'
import { Container, Row, Col, Card } from 'react-bootstrap'
function App() {
  return (
    <Store>
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Counter />
              </Card.Body>
            </Card>


            <Card>
              <Card.Body>
                <Todo />
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Posts />
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Fruit />
                <SecondFruit />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Store>
  );
}

export default App;
