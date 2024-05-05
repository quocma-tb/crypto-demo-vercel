import React from 'react';
import BalanceDetail from './components/BalanceDetail';
import ChartSmallCard from './components/ChartSmallCard';
import CoinValue from './components/CoinValue';
import LoginActivity from './components/LoginActivity';
import RecentTransaction from './components/RecentTransaction';
import UserDetailcard from './components/UserDetailcard';

function Dashboard() {
    return (
        <div className='container-xxl'>
            <UserDetailcard />
            <ChartSmallCard />
            <BalanceDetail />
            <div className='row g-3 mb-3 row-deck'>
                <CoinValue />
                <LoginActivity />
            </div>
            <RecentTransaction />
        </div>
    )
}
export default Dashboard;