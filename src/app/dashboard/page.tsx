import React from 'react';
import BalanceDetail from './components/BalanceDetail';
import ChartSmallCard from './components/ChartSmallCard';
import CoinValue from './components/CoinValue';
import LoginActivity from './components/LoginActivity';
import Cryptocurrencies from './components/Cryptocurrencies';
import UserDetailcard from './components/UserDetailcard';

function Dashboard() {
    return (
        <div className='container-xxl'>
            {/* <ChartSmallCard /> */}
            {/* <BalanceDetail /> */}
            {/* <div className='row g-3 mb-3 row-deck'>
                <CoinValue />
                <LoginActivity />
            </div> */}
            <Cryptocurrencies />
        </div>
    )
}
export default Dashboard;