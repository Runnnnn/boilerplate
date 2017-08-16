import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Route, Link, Switch} from 'react-router-dom'
import { ConnectedRouter as Router, push } from 'react-router-redux'
import { history } from '../configureStore'
import {testAction} from '../actions'
import Home from './Home'

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

class App extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.testAction()
    }
    render() {
        return (
            <Router history={history}>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default connect(state => ({

}), {
    testAction
})(App)
