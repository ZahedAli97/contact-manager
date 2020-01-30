

export const ADD_USER = "ADD_USER";

export function add_user(contacts) {
    return { type: ADD_USER, contacts }
}