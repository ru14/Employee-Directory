
import { useReducer} from "react"

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

//action is varable and state is current state
function reducer(state, action) {
    switch (action.type) {
        case
            ACTIONS.MAKE_REQUEST:
            return { loading: true, users: [] }
        case
            ACTIONS.GET_DATA:
            return { ...state, loading: false, users: action.payload.users }
        case
            ACTIONS.ERROR:
            return {...state, loading: false, users: action.payload.error, users: [] }
default: 
return state
    }
}
export default function useFetchUsers(params, page) {
    const [state, dispatch] = useReducer(reducer, { users: [], loading: true })
dispatch
    return {
        users: [],
        loading: false,
        error: false
    }
}
