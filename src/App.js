import React from 'react'
import { Route } from 'react-router-dom'

const HomePage = () => <h1>Home</h1>
const AboutPage = () => <h1>About</h1>
const PostPage = () => <h1>Post</h1>
const ProjectPage = () => <h1>Project</h1>

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/posts" component={PostPage} />
        <Route path="/projects" component={ProjectPage} />
      </div>
    )
  }
}

export default App
