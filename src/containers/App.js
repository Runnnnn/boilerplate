import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                app
            </div>
        )
    }
}

export default connect()(App)
