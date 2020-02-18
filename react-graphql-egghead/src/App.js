import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Recipes from './views/Recipes'
import AddRecipe from './views/AddRecipe'
import { Container, Row, Col } from 'react-bootstrap'


const client = new ApolloClient({
  uri: "http://localhost:4000/"
})

function App() {
  return (
    <ApolloProvider client={client} >
      <Container>

        <Row className="justify-content-md-center">
          <Col></Col>
          <Col xs={6}>
            <AddRecipe />
            <hr />
            <Recipes />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </ApolloProvider >
  );
}

export default App;
