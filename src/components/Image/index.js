import React from 'react'
import './Image.scss'

const Image = ({url}) => {
    return <div className='image-wrap'>
        <img src={url} className='image'/>
        <span className='diss'>hahahahahaa</span>
    </div>
}

export default Image
