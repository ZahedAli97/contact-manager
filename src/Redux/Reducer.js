import { ADD_USER } from "./ActionCreator";


export default function reducerState(state = { users: [] }, action) {
    switch (action.type) {
        case ADD_USER:
            return { ...state, 'users': [...action.contacts] };

        default:
            return { ...state };
    }
}