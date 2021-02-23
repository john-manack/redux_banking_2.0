'use strict';

// Store
const defaultState = {
    checking: 100,
    savings: 100
};

// Actions
const createDeposit = (account, amount) => {
    return {
        type: 'deposit',
        payload: {
            account,
            amount
        }
    }
}

const createWithdrawal = (account, amount) => {
    return {
        type: 'withdrawal',
        payload: {
            account,
            amount
        }
    }
}

// Reducer
const accounts = (state=defaultState, action) => {
    switch (action.type) {
        case 'deposit':
            return {
                ...state,
                [action.payload.account]: state[action.payload.account] + action.payload.amount
            }
        case 'withdrawal':
            return{
                ...state,
                [action.payload.account]: state[action.payload.account] - action.payload.amount
            }
        default:
            return state;
    }
}

