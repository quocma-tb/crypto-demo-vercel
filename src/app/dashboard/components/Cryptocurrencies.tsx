'use client'
import React, { useEffect, useState } from 'react';
import DataTable, {TableProps } from 'react-data-table-component';
import { CoinWithMarketData } from '@/app/api/coins/route';
import Link from 'next/link'
import dynamic from 'next/dynamic';
import { Spinner } from 'react-bootstrap';
import { useDebounce } from '@/core/hooks/useDebounce';

const Apex = dynamic(() => import('./Apex'), {ssr: false})


type CryptocurrenciesRow = CoinWithMarketData & {
    idx: number,
}

const PriceChangePercentItem = ({ val } : {val: number}) => {
    return <p 
        className={`fw-bold ${val > 0 ? 'text-success' : 'text-danger'}`}

    >
        <i className={`fa fa-caret-${val > 0 ? 'up' : 'down'}`}></i>
        {Number(Math.abs(val)).toFixed(3)}%
    </p>
}

const cryptocurrenciesColumns : TableProps<CryptocurrenciesRow>['columns'] = [
    {
        name: "#",
        selector: (row: CryptocurrenciesRow) => row.idx,
        sortable: true,
        minWidth: '50px',
    },
    {
        name: "Coin",
        selector: (row: CryptocurrenciesRow) => row.name,
        cell: (row: CryptocurrenciesRow) => <Link href={`/exchange/${row.id}`}><img className="avatar rounded-circle mx-3" src={row.image} alt=""  width={24} height={24} /> <span>{row.name}</span></Link>,
        sortable: true, 
        minWidth: "250px"
    },
    {
        name: "Price",
        selector: (row: CryptocurrenciesRow) => `$${row.current_price?.toLocaleString('it-IT')}`,
        sortable: true,
    },
    {
        name: "1h",
        cell: (row: CryptocurrenciesRow) => <PriceChangePercentItem val={row.price_change_percentage_1h_in_currency} />,
        sortable: true,
        
    },
    {
        name: "24h",
        cell: (row: CryptocurrenciesRow) => <PriceChangePercentItem val={row.price_change_percentage_24h_in_currency} />,
        sortable: true
    },
    {
        name: "7day",
        cell: (row: CryptocurrenciesRow) => <PriceChangePercentItem val={row.price_change_percentage_7d_in_currency} />,
        sortable: true
    },
    {
        name: "24h Volume",
        selector: (row: CryptocurrenciesRow) => `$${row.market_cap_change_24h?.toLocaleString('it-IT')}`,
        sortable: true,
        minWidth: "200px"
    },
    {
        name: "Market Cap",
        selector: (row: CryptocurrenciesRow) => `$${row.market_cap?.toLocaleString('it-IT')}`,
        sortable: true,
        minWidth: "200px"
    },
    {
        name: "Last 7 Days",
        cell: (row: CryptocurrenciesRow) => <Link href={`/exchange/${row.id}`}><Apex data={{
            chartData: {
                options: {
                    chart: {
                        type: 'line',
                        height: 42,
                        width:100,
                        sparkline: {
                            enabled: true,
                        },
                    },
                    stroke: {
                        width: 1
                    },
                    colors: [row.price_change_percentage_7d_in_currency > 0 ? '#00ff00' : '#ff0000'],
    
                },
                series: [{
                    name: "price",
                    data: row.sparkline_in_7d?.price || []
                }],
    
            }
        }} /></Link>,
        sortable: true
    }
]
const pageSize = 50;
function Cryptocurrencies() {
    const [coins, setCoins] = useState<CoinWithMarketData[]>([])
    const cryptocurrenciesRowsData = coins.map((c, idx: number) => ({...c, idx: idx + 1}))
    const [loading, setLoading] = useState<boolean>(true)
    const [page, setPage] = useState<number>(1)
    const debouncePageValue = useDebounce(page, 300)
    const fetchCoins = async (page=1, size = pageSize) => {
        setLoading(true)
        const searchParams = new URLSearchParams();
        searchParams.append('price_change_percentage', '1h,24h,7d')
        searchParams.append('sparkline', 'true')
        searchParams.append('page', String(page))
        searchParams.append('per_page', String(size))
        const coins = await fetch(`/api/coins?${searchParams.toString()}`).then(res => res.json()).finally(() => setLoading(false))
        setCoins(coins)
    }

    useEffect(() => {
        fetchCoins(debouncePageValue)
    }, [debouncePageValue])

    return (
        <div className="row g-3 mb-3 row-deck">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-header py-3 d-flex justify-content-between">
                        <h6 className="mb-0 fw-bold">Cryptocurrencies</h6>
                    </div>
                    <div className="card-body">
                        <div id="ordertabthree_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                            {/* <div className="" style={{ display: 'flex', flexWrap: 'wrap' }} >
                                <div className="col-sm-12 col-md-6 mb-2 " style={{ display: 'flex',alignItems: 'center' }}>
                                    <div id="myDataTable_filter" className="dataTables_filter">
                                        <label className='d-flex align-items-center'>Search:<div className='mx-1'><input type="search" className="form-control" /></div></label>
                                    </div>
                                </div>
                            </div> */}
                            <div className="row">
                                <div className="col-sm-12">
                                    <DataTable
                                        progressPending={loading}
                                        progressComponent={
                                            <div style={{minHeight: 350}}>
                                                <Spinner animation='grow' variant='primary'/>
                                            </div>
                                        }
                                        columns={cryptocurrenciesColumns}
                                        data={cryptocurrenciesRowsData}
                                        fixedHeader
                                        fixedHeaderScrollHeight='400px'
                                        selectableRows={false}
                                        highlightOnHover={true}
                                        pagination={false}
                                    />
                                </div>
                            </div>
                            <div className="row mt-3 ">
                                <div className="col-sm-12 col-md-5" style={{ float: 'left' }}>
                                    <div className="dataTables_info" id="myDataTable_info" role="status" aria-live="polite">Showing {pageSize} items / page</div>
                                </div>
                                <div className="col-sm-12 col-md-7 " >
                                    <div className="dataTables_paginate paging_simple_numbers" id="myDataTable_paginate" style={{ float: 'right' }}>
                                        <ul className="pagination">
                                            {page > 1 ? (
                                                <li className="paginate_button page-item previous " onClick={() => setPage(page => page - 1)} id="myDataTable_previous"><span className='page-link'>Previous</span></li>
                                            ) : null}
                                            <li className="paginate_button page-item active"><span className="page-link">{page}</span></li>
                                            {coins.length >= pageSize ? (
                                                <li className="paginate_button page-item next " onClick={() => setPage(page => page + 1)} id="myDataTable_next"><span className="page-link">Next</span></li>
                                            ) : null}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cryptocurrencies