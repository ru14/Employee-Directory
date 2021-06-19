
import { useEffect, useReducer} from "react"
import axios from "axios"
const URL = "https://randomuser.me/api/?results=50&nat=us"

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
            return {...state, loading: false, errors: action.payload.error, users:[]}
default: 
return state
    }
}
//Every time change in parmas or anything we have to reload page to repopulate by use of use effect hook.
export default function useFetchUsers(params, page) {
    const [state, dispatch] = useReducer(reducer, { users: [], loading: true })
useEffect(() =>{
dispatch({type: ACTIONS.MAKE_REQUEST})
axios.get(URL,{
    params:{markdown: true, page:page, ...params}
}).then(res =>{
    console.log(res)
    dispatch({type: ACTIONS.GET_DATA, payload:{users:res.data.results}}) 
}).catch(e=>{
    dispatch({type:ACTIONS.ERROR, payload:{error: e}})
})
},[params,page])
    return state
}
