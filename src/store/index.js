import { createSlice, configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux';

const initialState = {
    counter: 0,
    showCounter: false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        },
    }
});
const store = configureStore({
    reducer: counterSlice.reducer
})
export const counterActions = counterSlice.actions;


// const counterReducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case 'increment':
//             return {
//                 ...state,
//                 counter: state.counter + 1
//             }
//         case 'decrement':
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             }
//         case 'increase':
//             return {
//                 ...state,
//                 counter: state.counter + action.amount
//             }
//         case 'toggle':
//             return {
//                 ...state,
//                 showCounter: !state.showCounter,
//                 counter: state.counter
//             }

//         default:
//             return state;
//     }

// }


// const store = createStore(counterReducer);

export default store;