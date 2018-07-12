import React from 'react'
import { Route, Switch } from 'react-router-dom'

const HomePage = () => <h1>Home</h1>
const AboutPage = () => <h1>About</h1>
const PostPage = () => <h1>Post</h1>
const ProjectPage = () => <h1>Project</h1>
const NotFoundPage = () => <h1>404: Not found</h1>

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/posts" component={PostPage} />
        <Route path="/projects" component={ProjectPage} />
        <Route component={NotFoundPage} />
      </Switch>
    )
  }
}

export default App
