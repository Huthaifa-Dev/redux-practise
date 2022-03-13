import { createSlice, configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux';

const initialCounterState = {
    counter: 0,
    showCounter: false
}

const initialAuthState = {
    isAuthinicated: false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
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

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        logout(state) {
            state.isAuthinicated = false;
        },
        login(state) {
            state.isAuthinicated = true;
        }
    }
})
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;


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