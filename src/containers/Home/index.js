import React, {Component} from 'react'
import {connect} from 'react-redux'
import {HomePage} from '../../views'

class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <HomePage/>
        </div>
    }
}

export default connect()(Home)
