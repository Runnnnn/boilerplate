import React from 'react'
import {Input, Image} from '../../components'

const Comment = ({img}) => {
    return <div>
        Comment: <Input></Input>
        <Image url={img}/>
    </div>
}

export default Comment
