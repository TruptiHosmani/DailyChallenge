import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'

import User from './User/User'
const Stories = (props) => {

  return (
    <div >
      <h2>{props.name} Stories</h2>
      <ol className="stories">
        {props.stories && props.stories.length > 0 ? props.stories.map((item, index) => {
          // console.log(item)
          return (
            <li key={index}>
              {item.url ? <a className="title" href={item.url} target="_blank">{item.title}</a> : <span className="title">{item.title}</span>}
              {item.score} point by <Link className="by" to={`/user/${item.by}`}>{item.by}</Link> {parseInt((Date.now() - item.time * 1000) / 60000)} mins ago | discuss
            </li>

          )
        }) : null}

        {parseInt(props.currentPage) === 0 ? <a className="title" onClick={props.updatePage}>next</a> : <a className="title">prev</a> | <a className="title">next</a>}
      </ol>
    </div >
  )
}


//https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
function App() {
  const [newStoriesList, setNewStoriesList] = useState([]);
  const [newStories, setNewStories] = useState([]);

  const [topStoriesList, setTopStoriesList] = useState([]);
  const [topStories, setTopStories] = useState([]);


  const [bestStoriesList, setBestStoriesList] = useState([]);
  const [bestStories, setBestStories] = useState([]);


  const [askStoriesList, setAskStoriesList] = useState([]);
  const [askStories, setAskStories] = useState([]);


  const [showStoriesList, setShowStoriesList] = useState([]);
  const [showStories, setShowStories] = useState([]);



  const [jobStoriesList, setJobStoriesList] = useState([]);
  const [jobStories, setJobStories] = useState([]);



  const [currentPage, setCurrentPage] = useState(0);


  useEffect(() => {
    fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
      .then(res => res.json())
      .then((res) => {
        setNewStoriesList(res)
      })

    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(res => res.json())
      .then((res) => {
        setTopStoriesList(res)
      })


    fetch('https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty')
      .then(res => res.json())
      .then((res) => {
        setBestStoriesList(res)
      })

    fetch('https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty')
      .then(res => res.json())
      .then((res) => {
        setAskStoriesList(res)
      })

    fetch('https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty')
      .then(res => res.json())
      .then((res) => {
        setShowStoriesList(res)
      })


    fetch('https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty')
      .then(res => res.json())
      .then((res) => {
        setJobStoriesList(res)
      })

  }, [])

  const getStoryDetails = async (id) => {
    return await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then(res => res.json())
      .then((res) => {
        // console.log(res)
        return res
        //setTopStories(oldArray => [...oldArray, res])

      })
  }

  const updatePage = () => {
    setCurrentPage(currentPage + 1)
    console.log(currentPage)
  }

  useEffect(() => {
    // console.log("topStoriesList", topStoriesList.length)
    topStoriesList.forEach((id, index) => {
      if (index < 15) {
        getStoryDetails(id).then(res => {
          setTopStories(oldArray => [...oldArray, res])
        })

      }
    })

  }, [topStoriesList])


  useEffect(() => {
    // console.log("newStoriesList", newStoriesList.length)
    newStoriesList.forEach((id, index) => {

      if (index < 15) {
        getStoryDetails(id).then(res => {
          setNewStories(oldArray => [...oldArray, res])
        })
      }
    })


  }, [newStoriesList])



  useEffect(() => {
    // console.log("bestStoriesList", bestStoriesList.length)
    bestStoriesList.forEach((id, index) => {
      if (index < 15) {
        getStoryDetails(id).then(res => {

          setBestStories(oldArray => [...oldArray, res])
        })
      }
    })
  }, [bestStoriesList])

  useEffect(() => {
    // console.log("showStoriesList", showStoriesList.length)
    showStoriesList.forEach((id, index) => {
      if (index < 15) {
        getStoryDetails(id).then(res => {

          setShowStories(oldArray => [...oldArray, res])
        })
      }
    })
  }, [showStoriesList])

  useEffect(() => {
    // console.log("askStoriesList", askStoriesList.length)
    askStoriesList.forEach((id, index) => {
      if (index < 15) {
        getStoryDetails(id).then(res => {

          setAskStories(oldArray => [...oldArray, res])
        })
      }
    })
  }, [askStoriesList])


  useEffect(() => {
    // console.log("jobStoriesList", jobStoriesList.length)
    jobStoriesList.forEach((id, index) => {
      if (index < 15) {
        getStoryDetails(id).then(res => {

          setJobStories(oldArray => [...oldArray, res])
        })
      }
    })
  }, [jobStoriesList])




  return (
    <div className="App">
      <div className="container">
        <Router >
          <div className="header">
            <ul className="nav">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/new' >New</Link></li>
              <li><Link to='/top' >Top</Link></li>
              <li><Link to='/best' >Best</Link></li>
              <li><Link to='/show' >Show</Link></li>
              <li><Link to='/ask' >Ask</Link></li>
              <li><Link to='/job' >Jobs</Link></li>
            </ul>
          </div>


          <hr />
          <Route exact path='/' render={() => <Stories stories={newStories} name="New" currentPage={currentPage} updatePage={updatePage} />} />
          <Route path='/new' render={() => <Stories stories={newStories} name="New" currentPage={currentPage} />} />
          <Route path='/top' render={() => <Stories stories={topStories} name="Top" currentPage={currentPage} />} />
          <Route path='/best' render={() => <Stories stories={bestStories} name="Best" currentPage={currentPage} />} />
          {/* <Route path='/comments' render={() => <Stories stories={commentsStories} name="Comments" />} /> */}
          <Route path='/show' render={() => <Stories stories={showStories} name="Show" />} />
          <Route path='/ask' render={() => <Stories stories={askStories} name="Ask" />} />
          <Route path='/job' render={() => <Stories stories={jobStories} name="Jobs" />} />

          <Route path='/user/:name' component={User} />
        </Router>
      </div>

    </div >
  )

}

export default App;
