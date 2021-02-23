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