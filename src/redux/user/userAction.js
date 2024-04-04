import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./userTypes"
import axios from 'axios'

// React Redux - Async Actions - https://www.youtube.com/watch?v=tQ80uAyqVyI
// React Redux - Redux Thunk Get Request - https://www.youtube.com/watch?v=tcCS4mGAq7Q


const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.Message
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}