import React, { createContext, useReducer } from 'react';

import { images } from '../constants';

const AppReducer = (state, action) => {
    switch (action.flag) {
        case 'INIT_USER':
            state.user = action.payload;
            action.flag = 'DONE';
            return {
                ...state
            };
        case 'UPDATE_PASSWORD':
            state.user = action.payload;
            action.flag = 'DONE';
            return {
                ...state
            };
        case 'UPDATE_PHONE':
            state.user = action.payload;
            action.flag = 'DONE';
            return {
                ...state
            };
        case 'UPDATE_EMAIL':
            state.user = action.payload;
            action.flag = 'DONE';
            return {
                ...state
            };
        case 'DEL_SHAREDPEOPLE':
            let tmpList = state.accessPeople.filter((item) => item.name !== action.payload);
            state.accessPeople = tmpList;
            return {
                ...state
            };
        default:
            return state;
    };
}

const initialState = {
    user: {},
    accessPeople: [
        {
            name: "Huy Hieu",
            image: images.person1,
        },
        {
            name: "Viet Thang",
            image: images.person2,
        },
        {
            name: "Thanh Phuc",
            image: images.person3,
        },
        {
            name: "Kiet Huynh",
            image: images.person3,
        },
    ]
}

const AppContext = createContext();

const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
            value={{
                user: state.user,
                accessPeople: state.accessPeople,
                dispatch
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export {
    AppContext,
    AppProvider,
    AppReducer
}