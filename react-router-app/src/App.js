import React from 'react';
import './App.css';
import {
  Route,
  Link,
  BrowserRouter as Router
} from 'react-router-dom'

const Home = () => {
  return (
    <div >
      <h2>Home</h2>
    </div>
  );
}

const About = () => {
  return (
    <div >
      <h2>About</h2>
    </div>
  );
}

const Topic = ({ match }) => {
  return (
    <div>
      {match.params.topicId}
    </div>
  );
}


const Topics = ({ match }) => {
  return (
    <div >
      <h2>Topics</h2>
      <ul>
        <li><Link to={`${match.url}/rendering`}> Rendering with recat</Link></li>
        <li><Link to={`${match.url}/components`}> Components</Link></li>
        <li><Link to={`${match.url}/props-v-state`}> Porps v. state</Link></li>
      </ul>


      {/* <Route path='/topics/rendering' component={Topic} />
      <Route path='/topics/components' component={Topic}/>
      <Route path='/topics/props-v-state' component={Home} /> */}
      <Route path='/topics/:topicId' component={Topic} />
      <Route exact path={match.url} render={() => (<p>Please select a topic...</p>)} />

    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <ul>
          <li><Link to="/"> Home</Link></li>
          <li><Link to="/about"> About</Link></li>
          <li><Link to="/topics"> Topics</Link></li>
        </ul>

        <hr />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/topics' component={Topics} />
      </Router >
    );
  }

}

export default App;
