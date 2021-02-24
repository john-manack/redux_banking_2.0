'use strict';

// import { createStore } from 'redux';
const { createStore } = Redux;
console.log('Starting banking app for multiple accounts...')

// Store
const defaultState = {
    checking: 100,
    savings: 100
};

// Actions
const ACTION_DEPOSIT = 'deposit';
const ACTION_WITHDRAWAL = 'withdrawal';

const createDeposit = (account, amount) => {
    return {
        type: ACTION_DEPOSIT,
        payload: {
            account,
            amount
        }
    }
}

const createWithdrawal = (account, amount) => {
    return {
        type: ACTION_WITHDRAWAL,
        payload: {
            account,
            amount
        }
    }
}

// Reducer
const accounts = (state=defaultState, action) => {
    switch (action.type) {
        case ACTION_DEPOSIT:
            return {
                ...state,
                [action.payload.account]: state[action.payload.account] + action.payload.amount
            }
        case ACTION_WITHDRAWAL:
            return{
                ...state,
                [action.payload.account]: state[action.payload.account] - action.payload.amount
            }
        default:
            return state;
    }
}

const store = createStore(
    accounts,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    console.log('=== state has updated ===');
    const state = store.getState();
    console.log(state)
});

window.store = store;
window.createDeposit = createDeposit;
window.createWithdrawal = createWithdrawal;

const depositButton = document.querySelector('#deposit');
const withdrawalButton = document.querySelector('#withdrawal');
const accountSelection = document.querySelectorAll('#account');
console.log("Account Selection is: ", accountSelection.value)


depositButton.addEventListener('click', (event) => {
    event.preventDefault();
})