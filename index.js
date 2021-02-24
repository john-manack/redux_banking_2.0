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
    const checkingBalance = document.querySelector('#checking');
    const savingsBalance = document.querySelector('#savings');
    checkingBalance.innerHTML = state.checking;
    savingsBalance.innerHTML = state.savings;
});

window.store = store;
window.createDeposit = createDeposit;
window.createWithdrawal = createWithdrawal;

const depositButton = document.querySelector('#deposit');
const withdrawalButton = document.querySelector('#withdrawal');
const rbs = document.querySelectorAll('input[name="accountChoice"]');
const amount = document.querySelector('#amount');


depositButton.addEventListener('click', (event) => {
    event.preventDefault();
    let selectedAccount;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedAccount = rb.value;
            break;
        }
    }
    const amountValue = parseInt(amount.value);
    store.dispatch(createDeposit(selectedAccount, amountValue))
});

withdrawalButton.addEventListener('click', (event) => {
    event.preventDefault();
    let selectedAccount;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedAccount = rb.value;
            break;
        }
    }
    const amountValue = parseInt(amount.value);
    store.dispatch(createWithdrawal(selectedAccount, amountValue))
});