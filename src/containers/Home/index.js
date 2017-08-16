import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Comment} from '../../components'
import img from '../../assets/span.jpg'

class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <Comment img={img}/>
        </div>
    }
}

export default connect()(Home)
