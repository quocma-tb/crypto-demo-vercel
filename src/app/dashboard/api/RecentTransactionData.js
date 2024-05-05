import React from 'react';
import F1 from '@/assets/images/coin/ETH.png';
import F2 from '@/assets/images/coin/SOL.png';
import Image from 'next/image';

export const RecentTransactionData={
    columns:[
        {
            name: "DATE",
            selector: (row) => row.date,
            sortable: true,
            // cell: (row) => <a href="#!" className="fw-bold text-secondary">{row.id}</a>
        },
        {
            name: "PAIR",
            selector: (row) => row.name,
            cell: row => <><img className="avatar rounded-circle mx-3" src={row.image} alt="" /> <span>{row.name}</span></>,
            sortable: true, minWidth: "250px"
        },
        {
            name: "SIDE",
            selector: (row) => row.side,
            cell: row => <><span className={`color-price-down ${row.color?"text-success":'text-danger'}`}>{row.side}</span></>,
            sortable: true,
            
        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true
        },
        {
            name: "EXECUTED",
            selector: (row) => row.number,
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
        }
    ],
    rows: [
        {
           date:'09-18 17:32:15',
           name:'ETH/USDT',
           image:F1,
           side:'Sell',
           color:false,
           price:'3,487.50',
           number:'0.0110',
           fee:'0.03836250 USDT',
           total:'38.36250000 USDT'
        },
        {
            date:'09-18 17:31:11',
            name:'SOL/USDT',
            image:F2,
            side:'Sell',
            color:false,
            price:'160.33',
            number:'0.75',
            fee:'0.12024750 USDT',
            total:'120.24750000 USDT'
         },
         {
            date:'09-18 08:52:04',
            name:'ETH/USDT',
            image:F1,
            side:'Buy',
            color:true,
            price:'3,439.20',
            number:'0.0111',
            fee:'0.00001110 ETH',
            total:'38.17512000 USDT'
         },
         {
            date:'09-17 08:34:14',
            name:'SOL/USDT',
            image:F2,
            side:'Buy',
            color:true,
            price:'147.04',
            number:'0.76',
            fee:'0.00076000 SOL',
            total:'111.75040000 USDT'
         }
    ]
}