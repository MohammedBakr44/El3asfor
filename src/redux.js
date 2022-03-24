import { createStore } from 'redux';

// TODO 1 Actions
const PLAY = 'PLAY';
const PAUSE = 'PAUSE';

// TODO 2 Actions creators
export const incrementPlay = () => ({
    type: PLAY
})

export const pausePlay = () => ({
    type: PAUSE
})

// TODO 2.5 Initial State
const initialState = {
    count: 0
};

// TODO 3 Reducers
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAY:
            return { count: state.count + 1 };
        case PAUSE:
            return { count: 0 };
        default:
            return state;
    }
}

// TODO 4 Store
export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)