import {REQUEST_POSTS} from '../constants/ActionTypes'

const app = (state = {test: 'test'}, action) => {
    switch (action.type) {
    case REQUEST_POSTS:
        return state
    default:
        return state
    }
}

export default app
