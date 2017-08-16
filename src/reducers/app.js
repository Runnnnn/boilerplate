const app = (state = {}, action) => {
    switch (action.type) {
    case 'INVALIDATE_REDDIT':
    case 'RECEIVE_POSTS':
    case 'REQUEST_POSTS':
        return {
            ...state
        }
    default:
        return state
    }
}

export default app
