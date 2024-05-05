import React from 'react';
import A2 from '../../../assets/images/coin/SOL.png';
import A1 from '../../../assets/images/coin/ETH.png';
import A3 from '../../../assets/images/coin/DGD.png';
import A4 from '../../../assets/images/coin/ADA.png';
import A5 from '../../../assets/images/coin/BNB.png';
import A6 from '../../../assets/images/coin/DOGE.png';
import A7 from '../../../assets/images/coin/ADX.png';

import B1 from '../../../assets/images/coin/ETH.png';
import B2 from '../../../assets/images/coin/SOL.png';
import B3 from '../../../assets/images/coin/ETH.png';
import B4 from '../../../assets/images/coin/SOL.png';

import C1 from '../../../assets/images/coin/ETH.png';
import C2 from '../../../assets/images/coin/SOL.png';
import C3 from '../../../assets/images/coin/ETH.png';
import C4 from '../../../assets/images/coin/SOL.png';

import D1 from '../../../assets/images/coin/ICN.png';
import D2 from '../../../assets/images/coin/EDG.png';
import D3 from '../../../assets/images/coin/ADA.png';
import D4 from '../../../assets/images/coin/ARK.png';
import D5 from '../../../assets/images/coin/FUN.png';
import D6 from '../../../assets/images/coin/BNB.png';
import D7 from '../../../assets/images/coin/ETH.png';


export const OrderbookDatafirst = {
    columns: [
        {
            name: "PRICE(USDT)",
            selector: (row) => row.usdt,
            sortable: true,
            cell: (row) => <span className="color-price-up">{row.usdt}</span>,
        },
        {
            name: "AMOUNT(BTC)",
            selector: (row) => row.btc,
            sortable: true
        },
        {
            name: "TOTAL",
            selector: (row) => row.total,
            sortable: true
        }
    ],
    rows: [
        {
            usdt: '44279.20',
            btc: '0.17214',
            total: '76,053.29043'
        },
        {
            usdt: '43979.43',
            btc: '0.03855',
            total: '10,978.37750'
        },
        {
            usdt: '43978.90',
            btc: '0.00062',
            total: '1,151.15971'
        },
        {
            usdt: '43978.43',
            btc: '0.11228',
            total: '6,938.88312'
        },
        {
            usdt: '43928.23',
            btc: '0.08881',
            total: '1,677.76807'
        },
        {
            usdt: '43925.73',
            btc: '0.08752',
            total: '5,022.51319'
        },
        {
            usdt: '42978.90',
            btc: '0.00062',
            total: '1,151.15971'
        },
        {
            usdt: '42978.43',
            btc: '0.11228',
            total: '6,938.88312'
        },
        {
            usdt: '42928.23',
            btc: '0.08881',
            total: '1,677.76807'
        },
        {
            usdt: '42925.73',
            btc: '0.08752',
            total: '5,022.51319'
        },
    ]
}

export const OrderbookDatasecond = {
    columns: [
        {
            name: "PRICE(USDT)",
            selector: (row) => row.usdt,
            sortable: true,
            cell: (row) => <span className="color-price-down">{row.usdt}</span>
        },
        {
            name: "AMOUNT(BTC)",
            selector: (row) => row.btc,
            sortable: true
        },
        {
            name: "TOTAL",
            selector: (row) => row.total,
            sortable: true
        }
    ],
    rows: [
        {
            usdt: '44279.20',
            btc: '0.17214',
            total: '76,053.29043'
        },
        {
            usdt: '43979.43',
            btc: '0.03855',
            total: '10,978.37750'
        },
        {
            usdt: '43978.90',
            btc: '0.00062',
            total: '1,151.15971'
        },
        {
            usdt: '43978.43',
            btc: '0.11228',
            total: '6,938.88312'
        },
        {
            usdt: '43928.23',
            btc: '0.08881',
            total: '1,677.76807'
        },
        {
            usdt: '43925.73',
            btc: '0.08752',
            total: '5,022.51319'
        },
        {
            usdt: '42978.90',
            btc: '0.00062',
            total: '1,151.15971'
        },
        {
            usdt: '42978.43',
            btc: '0.11228',
            total: '6,938.88312'
        },
        {
            usdt: '42928.23',
            btc: '0.08881',
            total: '1,677.76807'
        },
        {
            usdt: '42925.73',
            btc: '0.08752',
            total: '5,022.51319'
        },
    ]
}

export const OrderbookSortData = {
    columns: [
        {
            name: "PRICE(USDT)",
            selector: (row) => row.usdt,
            sortable: true,
            cell: (row) => <span className="color-price-up">{row.usdt}</span>
        },
        {
            name: "AMOUNT(BTC)",
            selector: (row) => row.btc,
            sortable: true
        },
        {
            name: "TOTAL",
            selector: (row) => row.total,
            sortable: true
        }
    ],
    rows: [
        {
            usdt: '44279.20',
            btc: '0.17214',
            total: '76,053.29043'
        },
        {
            usdt: '43979.43',
            btc: '0.03855',
            total: '10,978.37750'
        },
        {
            usdt: '43978.90',
            btc: '0.00062',
            total: '1,151.15971'
        },
        {
            usdt: '43978.43',
            btc: '0.11228',
            total: '6,938.88312'
        },
        {
            usdt: '43928.23',
            btc: '0.08881',
            total: '1,677.76807'
        },
        {
            usdt: '43925.73',
            btc: '0.08752',
            total: '5,022.51319'
        },
        {
            usdt: '42978.90',
            btc: '0.00062',
            total: '1,151.15971'
        },
        {
            usdt: '42978.43',
            btc: '0.11228',
            total: '6,938.88312'
        },
        {
            usdt: '42928.23',
            btc: '0.08881',
            total: '1,677.76807'
        },
        {
            usdt: '42925.73',
            btc: '0.08752',
            total: '5,022.51319'
        },
    ]
}

export const OrderbookLongData = {
    columns: [
        {
            name: "PRICE(USDT)",
            selector: (row) => row.usdt,
            sortable: true,
            cell: (row) => <span className="color-price-up">{row.usdt}</span>
        },
        {
            name: "AMOUNT(BTC)",
            selector: (row) => row.btc,
            sortable: true
        },
        {
            name: "TOTAL",
            selector: (row) => row.total,
            sortable: true
        }
    ],
    rows: [
        {
            usdt: '44279.20',
            btc: '0.17214',
            total: '76,053.29043'
        },
        {
            usdt: '43979.43',
            btc: '0.03855',
            total: '10,978.37750'
        },
        {
            usdt: '43978.90',
            btc: '0.00062',
            total: '1,151.15971'
        },
        {
            usdt: '43978.43',
            btc: '0.11228',
            total: '6,938.88312'
        },
        {
            usdt: '43928.23',
            btc: '0.08881',
            total: '1,677.76807'
        },
        {
            usdt: '43925.73',
            btc: '0.08752',
            total: '5,022.51319'
        },
        {
            usdt: '42978.90',
            btc: '0.00062',
            total: '1,151.15971'
        },
        {
            usdt: '42978.43',
            btc: '0.11228',
            total: '6,938.88312'
        },
        {
            usdt: '42928.23',
            btc: '0.08881',
            total: '1,677.76807'
        },
        {
            usdt: '42925.73',
            btc: '0.08752',
            total: '5,022.51319'
        },
    ]
}

export const OpenOrderData = {

    columns: [
        {
            name: " DATE",
            selector: (row) => row.date,
            sortable: true,
            maxWidth: '50px',
            // cell: (row) => <a href="#!" className="fw-bold text-secondary">{row.id}</a>
            minWidth: "150px"
        },

        {
            name: "PAIR",
            selector: (row) => row.name,
            cell: row => <> <img src={row.image} alt="" className="img-fluid avatar mx-1" />{row.name}</>,
            sortable: true,
            minWidth: "150px"
        },
        {
            name: "TYPE",
            selector: (row) => row.type,
            sortable: true
        },
        {
            name: "SIDE",
            selector: (row) => row.side,
            sortable: true
        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true
        },
        {
            name: "AMOUNT",
            selector: (row) => row.amount,
            sortable: true
        },
        {
            name: "ACTION",
            selector: (row) => { },
            sortable: true,
            cell: () =><div className="btn-group" role="group">
            <button type="button" className="btn btn-outline-secondary"><i className="icofont-edit text-success"></i></button>
            <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
        </div>
        }

    ],
    rows: [
        {
            date: '09-18 17:32:15',
            name: 'ETH/USDT',
            image: A1,
            type: 'Limit',
            side: 'Buy',
            price: '2774.00',
            amount: '0.000378',
        },
        {
            date: '09-20 18:38:15',
            name: 'SOL/USDT',
            image: A2,
            type: 'Limit',
            side: 'Buy',
            price: '125.00',
            amount: '0.005378',
        },
        {
            date: '09-18 17:32:15',
            name: 'DGD/USDT',
            image: A3,
            type: 'Limit',
            side: 'Sell',
            price: '35.00',
            amount: '0.000005',
        },
        {
            date: '09-21 13:32:15',
            name: 'ADA/USDT',
            image: A4,
            type: 'Limit',
            side: 'Sell',
            price: '3.500',
            amount: '0.000001',
        },
        {
            date: '09-21 13:32:15',
            name: 'BNB/USDT',
            image: A5,
            type: 'Limit',
            side: 'Sell',
            price: '415.00	',
            amount: '0.000041',
        },
        {
            date: '09-20 13:32:15',
            name: 'DOGE/USDT',
            image: A6,
            type: 'Limit',
            side: 'Sell',
            price: '0.2040',
            amount: '0.203900',
        },
        {
            date: '09-22 16:32:15',
            name: 'ADX/USDT',
            image: A7,
            type: 'Limit',
            side: 'Buy',
            price: '2.134',
            amount: '2.13',
        },
    ]
}

export const OrderHistoryData = {

    columns: [
        {
            name: " DATE",
            selector: (row) => row.date,
            sortable: true,
            maxWidth: '50px',
            minWidth: "150px"
            // cell: (row) => <a href="#!" className="fw-bold text-secondary">{row.id}</a>
        },

        {
            name: "PAIR",
            selector: (row) => row.name,
            cell: row => <> <img src={row.image} alt="" className="img-fluid avatar mx-1" />{row.name}</>,
            sortable: true,
            minWidth: "150px"
        },
        {
            name: "TYPE",
            selector: (row) => row.type,
            sortable: true
        },
        {
            name: "SIDE",
            selector: (row) => row.side,
            sortable: true
        },
        {
            name: "AVERAGE",
            selector: (row) => row.average,
            sortable: true
        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true
        },
        {
            name: "EXECUTED",
            selector: (row) => row.executed,
            sortable: true
        },
        {
            name: "AMOUNT",
            selector: (row) => row.amount,
            sortable: true
        },
        {
            name: "TOTAL",
            selector: (row) => row.total,
            sortable: true
        },

    ],
    rows: [
        {
            date: '09-18 17:32:15',
            name: 'ETH/USDT',
            image: B1,
            type: 'Market',
            side: 'Sell',
            average:'3,487.50',
            price: 'Market',
            executed:'0.0110',
            amount: '0.0110',
            total:'38.36'
        },
        {
            date: '09-18 17:31:11',
            name: 'SOL/USDT',
            image: B2,
            type: 'Market',
            side: 'Sell',
            average:'160.33',
            price: 'Market',
            executed:'0.75',
            amount: '0.75',
            total:'120.25'
        },
        {
            date: '09-18 08:52:04',
            name: 'ETH/USDT',
            image: B3,
            type: 'Market',
            side: 'Buy',
            average:'3,439.20',
            price: 'Market',
            executed:'0.0111',
            amount: '0.0111',
            total:'38.18'
        },
        {
            date: '09-17 08:34:14',
            name: 'SOL/USDT',
            image: B4,
            type: 'Market',
            side: 'Buy',
            average:'147.04',
            price: 'Market',
            executed:'0.76',
            amount: '0.71',
            total:'111.75'
        },
      
    ]
}

export const TradeHistoryData = {

    columns: [
        {
            name: " DATE",
            selector: (row) => row.date,
            sortable: true,
            maxWidth: '50px',
            minWidth: "150px"
            // cell: (row) => <a href="#!" className="fw-bold text-secondary">{row.id}</a>
        },

        {
            name: "PAIR",
            selector: (row) => row.name,
            cell: row => <> <img src={row.image} alt="" className="img-fluid avatar mx-1" />{row.name}</>,
            sortable: true,
            minWidth: "150px"
        },
        {
            name: "SIDE",
            selector: (row) => row.side,
            sortable: true
        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true
        },
        {
            name: "EXECUTED",
            selector: (row) => row.executed,
            sortable: true
        },
        {
            name: "FEE",
            selector: (row) => row.fee,
            sortable: true
        },
        {
            name: "TOTAL",
            selector: (row) => row.total,
            sortable: true
        },

    ],
    rows: [
       
        {
            date: '09-18 17:32:15',
            name: 'ETH/USDT',
            image: C1,
            side: 'Sell',
            price: '3,487.50',
            executed:'0.0110',
            fee: '0.03836250 USDT',
            total:'38.36250000 USDT'
        },
        {
            date: '09-18 17:31:11',
            name: 'SOL/USDT',
            image: C2,
            side: 'Sell',
            price: '160.33',
            executed:'0.75',
            fee: '0.12024750 USDT',
            total:'120.24750000 USDT'
        },
        {
            date: '09-18 08:52:04',
            name: 'ETH/USDT',
            image: C3,
            side: 'Buy',
            price: '3,439.20',
            executed:'0.0111',
            fee: '0.00001110 ETH',
            total:'38.17512000 USDT'
        },
        {
            date: '09-17 08:34:14',
            name: 'SOL/USDT',
            image: C4,
            side: 'Buy',
            price: '147.04',
            executed:'0.76',
            fee: '0.00076000 SOL',
            total:'111.75040000 USDT'
        },
      
    ]
}
export const FunData = {

    columns: [
        {
            name: "COIN",
            selector: (row) => row.name,
            cell: row => <> <img src={row.image} alt="" className="img-fluid avatar mx-1" />{row.name}</>,
            sortable: true,
           
        },
        {
            name: "TOTAL BALANCE",
            selector: (row) => row.total,
            sortable: true
        },
        {
            name: "AVAILABLE BALANCE",
            selector: (row) => row.availablebalance,
            sortable: true
        },
        {
            name: "IN ORDER",
            selector: (row) => row.order,
            sortable: true
        },
        {
            name: "BTC VALUE",
            selector: (row) => row.btcvalue,
            sortable: true
        }
    ],
    rows: [
        {
            name:'1INCH',
            image:D1,
            total:'10.00000000',
            availablebalance:'10.00000000	',
            order:'08.00000000',
            btcvalue:'0.00000080 BTC'
        },
        {
            name:'EDG',
            image:D2,
            total:'11.00000000',
            availablebalance:'11.00000000',
            order:'10.00000010',
            btcvalue:'0.000000010 BTC'
        },
        {
            name:'ADA',
            image:D3,
            total:'112.00000000',
            availablebalance:'112.00000000',
            order:'098.00000098',
            btcvalue:'0.0000000009 BTC'
        },
        {
            name:'ARK',
            image:D4,
            total:'113.00000000',
            availablebalance:'113.00000000',
            order:'	097.00000097',
            btcvalue:'0.0000000009 BTC'
        },
        {
            name:'Fun',
            image:D5,
            total:'218.00000000',
            availablebalance:'218.00000000',
            order:'095.00000095',
            btcvalue:'0.0000000008 BTC'
        },
        {
            name:'BNB',
            image:D6,
            total:'0.00431435',
            availablebalance:'0.00431435',
            order:'0.00000000',
            btcvalue:'0.00003445 BTC'
        },
        {
            name:'ETH',
            image:D7,
            total:'0.05431435',
            availablebalance:'0.05431435',
            order:'0.00000000',
            btcvalue:'0.00543445 BTC'
        },
    ]
}
