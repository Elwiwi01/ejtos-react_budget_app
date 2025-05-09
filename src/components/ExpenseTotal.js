import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    const total = expenses.reduce((total, item) => total + item.cost, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: £{total}</span>
        </div>
    );
};

export default ExpenseTotal;
