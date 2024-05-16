import { LOGIN_USER, REGISTER_USER } from './types';

const authReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload.user,
            };
        case REGISTER_USER:
            return {
                ...state,
                user: action.payload.user,
            };
        default:
            return state;
    }
};

export default authReducer;
