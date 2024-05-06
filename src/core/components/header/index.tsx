"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Coin, TrendingData } from '@/app/api/search/trending/route';
import { useDebounce } from '@/core/hooks/useDebounce';

const revalidateTrendingDataTime = 10 * 3600 // 10m
function Header() {
    const [collapse, setCollapse] = useState(false);
    const [collapsebig, setCollapsebig] = useState(false);
    const [searchTrending, setSearchTrending] = useState<TrendingData>()
    const [searchKeyword, setSearchKeyword] = useState<string>('')
    const searchKeyDebounce = useDebounce<string>(searchKeyword, 300);
    const [searchCoinResult, setSearchCoinResult] = useState<Coin[]>()
    
    const fetchTrendingSearchData = async () => {
        const result = await fetch('/api/search/trending').then(res => res.json())
        setSearchTrending(result)
    }

    const search = async (keyword: string) => {
        const result = await fetch(`/api/search?query=${keyword}`).then(res => res.json())
        setSearchCoinResult(result)
    }

    useEffect(() => {
        fetchTrendingSearchData()
        const fetchTrendingDataInterval = setInterval(fetchTrendingSearchData,revalidateTrendingDataTime)
        return () => {
            clearInterval(fetchTrendingDataInterval)
        }
    }, [])

    useEffect(() => {
        if(searchKeyDebounce) {
            search(searchKeyDebounce)
        }
    }, [searchKeyDebounce])

    return (
        <div className="header">
            <nav className="navbar py-4">
                <div className="container-xxl">
                    <div className="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
                        <div className="d-flex mx-2 mx-lg-3">
                            <Link className="nav-link text-primary collapsed" href={"/wallet-page"} title="Wallet">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 64 64">
                                    <path className="st1" d="M15,24c-3.86,0-7,2.691-7,6v20c0,3.309,3.14,6,7,6h41V32H15c-1.598,0-3-0.935-3-2s1.402-2,3-2h5.25 c0,0,1-5,5.75-5s6,5,6,5h22v-4H15z" style={{ fill: 'var(--primary-color)' }} data-st="fill:var(--chart-color4)"></path>
                                    <path className="st0" d="M42,4c-4.418,0-8,3.582-8,8s3.582,8,8,8c4.417,0,8-3.582,8-8S46.417,4,42,4z M42,16c-2.208,0-4-1.792-4-4 s1.792-4,4-4s4,1.792,4,4S44.208,16,42,16z"></path>
                                    <path className="st0" d="M26,20c-4.418,0-8,3.582-8,8h4c0-2.208,1.792-4,4-4s4,1.792,4,4h4C34,23.582,30.418,20,26,20z" ></path>

                                </svg>
                            </Link>
                        </div>
                        <div className="setting">
                            <a data-bs-toggle="modal" data-bs-target="#Settingmodal">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 38 38">
                                    <path d="M19,28c-4.964,0-9-4.04-9-9c0-4.964,4.036-9,9-9c4.96,0,9,4.036,9,9  C28,23.96,23.96,28,19,28z M19,16c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S20.654,16,19,16z" style={{ fill: 'var(--primary-color)' }} data-st="fill:var(--chart-color4);"></path>
                                    <path className="st0" d="M19,24c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S21.757,24,19,24z M19,16c-1.654,0-3,1.346-3,3  s1.346,3,3,3s3-1.346,3-3S20.654,16,19,16z M32,19c0-1.408-0.232-2.763-0.648-4.034l3.737-1.548l-0.766-1.848l-3.743,1.551  c-1.25-2.452-3.251-4.452-5.702-5.701l1.551-3.744l-1.848-0.765l-1.548,3.737C21.762,6.232,20.409,6,19,6  c-1.409,0-2.756,0.248-4.026,0.668l-1.556-3.756L11.57,3.677l2.316,5.592C15.416,8.462,17.154,8,19,8c6.065,0,11,4.935,11,11  s-4.935,11-11,11S8,25.065,8,19c0-3.031,1.232-5.779,3.222-7.771L9.808,9.816c-0.962,0.963-1.764,2.082-2.388,3.306l-3.744-1.551  l-0.765,1.847l3.738,1.548C6.232,16.238,6,17.592,6,19c0,1.409,0.232,2.763,0.648,4.034l-3.737,1.548l0.766,1.848l3.744-1.551  c1.25,2.451,3.25,4.451,5.701,5.7l-1.551,3.744l1.848,0.766l1.548-3.737C16.237,31.768,17.591,32,19,32s2.762-0.232,4.033-0.648  l1.549,3.737l1.848-0.766l-1.552-3.743c2.451-1.25,4.451-3.25,5.701-5.701l3.744,1.551l0.765-1.848l-3.736-1.548  C31.768,21.763,32,20.409,32,19z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <button className="navbar-toggler p-0 border-0 menu-toggle order-3" type="button" onClick={() => {
                        var sidebar = document.getElementById('mainsidemenu')
                        if (sidebar) {
                            if (sidebar.classList.contains('open')) {
                                sidebar.classList.remove('open')
                            } else {
                                sidebar.classList.add('open')
                            }
                        }
                    }}>
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 d-flex align-items-center" >
                        <a className="menu-toggle-option me-3 text-primary d-flex align-items-center" title="Menu Option" onClick={() => { setCollapsebig(!collapsebig); }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="var(--chart-color1)" className="bi bi-ui-checks-grid" viewBox="0 0 16 16">
                                <path style={{ fill: 'var(--chart-color1)' }} d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z"></path>
                            </svg>
                        </a>
                        <div className="main-search border-start px-3 flex-fill" onClick={() => { setCollapse(!collapse) }}>
                            <input 
                                className="form-control" 
                                type="text" 
                                placeholder="Enter your search key word" 
                                value={searchKeyword} 
                                onChange={ev => setSearchKeyword(ev.target.value)} 
                            />
                            <div className={`card border-0 shadow rounded-3 search-result slidedown ${collapse ? "show" : ''}`}>
                                {searchKeyword ? (
                                    <div className="card-body text-start">
                                    <small className="dropdown-header">Cryptocurrencies</small>
                                    <ul className='d-flex flex-column mt-1'>
                                        {searchCoinResult?.slice(0, 10)?.map(item => (
                                            <Link href={`/exchange/${item.id}`}>
                                                <li key={item.id} className='d-flex p-2 mb-2 align-items-center'>
                                                    <img src={item.thumb} width={32} height={32} />
                                                    <p className='mb-0 ms-2'>{item.name}</p>
                                                    { item.data?.price_change_percentage_24h ?
                                                        <p className={`mb-0 flex-grow-1 text-end fw-bold ${Number(item.data.price_change_percentage_24h['aed']) > 0 ? 'text-success' : 'text-danger'}`}>
                                                        {Number(item.data.price_change_percentage_24h['aed']) > 0 ? '' : ''}{Number(item.data.price_change_percentage_24h['aed']).toFixed(2)}%
                                                    </p> : null}
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                                ) : (

                                    <div className="card-body text-start">
                                        <small className="dropdown-header">🔥 Trending Search  </small>
                                        <ul className='d-flex flex-column mt-1'>
                                            {searchTrending?.coins?.slice(0,10).map(i => (
                                                <Link href={`/exchange/${i.item.id}`}>
                                                    <li key={i.item.id} className='d-flex p-2 mb-2 align-items-center'>
                                                        <img src={i.item.thumb} width={32} height={32} />
                                                        <p className='mb-0 ms-2'>{i.item.name}</p>
                                                        <p className={`mb-0 flex-grow-1 text-end fw-bold ${Number(i.item.data.price_change_percentage_24h['aed']) > 0 ? 'text-success' : 'text-danger'}`}>
                                                            {Number(i.item.data.price_change_percentage_24h['aed']) > 0 ? '' : ''}{Number(i.item.data.price_change_percentage_24h['aed']).toFixed(2)}%
                                                        </p>
                                                    </li>
                                                </Link>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <div className="container-xxl position-relative" id='commansidebar'>
                <div className="row">
                    <div className="col-md-12">
                        <div className={`card shadow menu slidedown position-absolute zindex-modal ${collapsebig ? 'show' : ''}`}>
                            <div className="card-body p-3">
                                <div className="row g-3">
                                    <div className="d-none d-lg-block col-lg-2 text-start">
                                        <h6 className="px-2 text-primary mb-0">Download App</h6>
                                        <img src={QrCode} alt="Download App" className="img-fluid" />
                                    </div>
                                    <div className="col-lg-10">
                                        <ul className="menu-grid list-unstyled row row-cols-xl-3 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 mb-0 mt-lg-3">
                                            <li className="col">
                                                <Link href={process.env.PUBLIC_URL +"/help"} className="d-flex color-700" onClick={() => { setCollapsebig(!collapsebig) }}>
                                                    <div className="avatar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 38 38">
                                                            <circle xmlns="http://www.w3.org/2000/svg" cx="19" cy="19" r="11" style={{ fill: 'var(--primary-color)' }} data-st="fill:var(--chart-color4);"></circle>
                                                            <path xmlns="http://www.w3.org/2000/svg" className="st0" d="M19,2c9.374,0,17,7.626,17,17c0,8.304-6.011,15.3-14,16.725v-2.025C28.847,32.309,34,26.257,34,19  c0-8.284-6.716-15-15-15S4,10.716,4,19s6.716,15,15,15c0.338,0,0.668-0.028,1-0.05V36h-1C9.626,36,2,28.374,2,19S9.626,2,19,2z   M20,23.417c0-2.067,0.879-2.99,1.896-4.06C22.882,18.322,24,17.148,24,15c0-2.757-2.243-5-5-5s-5,2.243-5,5h2c0-1.654,1.346-3,3-3  s3,1.346,3,3c0,1.348-0.651,2.032-1.552,2.979C19.357,19.124,18,20.55,18,23.417V26h2V23.417z M20,28h-2v2h2V28z"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="flex-fill text-truncate">
                                                        <p className="h6 mb-0">Help</p>
                                                        <small className="text-muted">How May I Help You?</small>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="col">
                                                <a className="d-flex color-700" onClick={() => { GotoChangeMenu("UI Components"); setCollapsebig(!collapsebig) }}>
                                                    <div className="avatar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24">
                                                            <rect xmlns="http://www.w3.org/2000/svg" className="st2" width="24" height="24" style={{ fill: 'none' }} fill="none"></rect>
                                                            <path xmlns="http://www.w3.org/2000/svg" d="M13,1.07V9h7C20,4.92,16.95,1.56,13,1.07z M4,15c0,4.42,3.58,8,8,8s8-3.58,8-8v-4H4V15z   M11,1.07C7.05,1.56,4,4.92,4,9h7V1.07z" style={{ fill: 'var(--primary-color)' }} data-st="fill:var(--chart-color4);"></path>
                                                            <path xmlns="http://www.w3.org/2000/svg" className="st0" d="M13,1.07V9h7C20,4.92,16.95,1.56,13,1.07z M11,1.07C7.05,1.56,4,4.92,4,9h7V1.07z" style={{ opacity: '0.2', fill: '#FFFFFF' }} fill="rgb(255, 255, 255)"></path>
                                                            <path xmlns="http://www.w3.org/2000/svg" className="st0" d="M6,15c-1.66,0-2.491,0.82-2.941,2.418C2.628,18.939,2.625,19.625,1,20.407C1.92,21.38,3.49,22,5,22  c2.21,0,4-1.563,4-3.719C9,16.389,7.66,15,6,15z M21.49,5C20,7,17.96,10.04,16,12c-1.48,1.48-5.48,3.93-5.48,3.93L8.07,13.48  c0,0,2.45-4,3.93-5.48c1.96-1.96,5-4,7-5.48c0.78-0.58,1.8-0.69,2.49,0C22.17,3.2,22.06,4.22,21.49,5z"></path>
                                                            <path xmlns="http://www.w3.org/2000/svg" className="st0" d="M16,12c-1.479,1.48-5.477,3.927-5.477,3.927l-2.449-2.45c0,0,2.445-3.998,3.926-5.477L16,12z"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="flex-fill text-truncate">
                                                        <p className="h6 mb-0">UI Components</p>
                                                        <small className="text-muted">Bootstrap Components</small>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="col">
                                                <Link href={process.env.PUBLIC_URL +"/invoice"} className="d-flex color-700" onClick={() => { setCollapsebig(!collapsebig) }}>
                                                    <div className="avatar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 38 38">
                                                            <path xmlns="http://www.w3.org/2000/svg" d="M22,6h2c0.875,0,1.513,0.657,2,1.31V10h4.501L32,12v24H22V6z" style={{ fill: 'var(--primary-color)' }} data-st="fill:var(--chart-color4);"></path>
                                                            <path xmlns="http://www.w3.org/2000/svg" className="st0" d="M10,14v18h18V14h-6v2h4v14h-6v-2.059c1.989-0.236,3-1.22,3-2.941c0-0.805-0.27-1.5-0.78-2.01  C21.226,21.998,19.654,22.003,19,22c-0.352-0.007-1.398,0.002-1.806-0.405C17.111,21.512,17,21.359,17,21c0-0.469,0-1,2-1  c1.122,0,1.788,0.205,2.297,0.709l1.406-1.422c-0.704-0.697-1.568-1.083-2.703-1.222V14H10z M18,18.059  c-1.988,0.236-3,1.221-3,2.941c0,0.805,0.271,1.5,0.781,2.01c0.994,0.992,2.543,0.989,3.22,0.99  c0.343-0.008,1.397-0.002,1.805,0.405C20.89,24.488,21,24.641,21,25c0,0.469,0,1-2,1c-1.121,0-1.787-0.205-2.297-0.709l-1.406,1.422  c0.705,0.697,1.568,1.083,2.703,1.222V30h-6V16h6V18.059z M30,14v20H8V4h15c0.46,0,1,0.26,1,1v3H12v2h12v2h7.99  c0,0-6.08-8.17-6.62-8.87C24.83,2.44,23.99,2,23,2H6v34h26V14H30z M26,7.31L28.01,10H26V7.31z"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="flex-fill text-truncate">
                                                        <p className="h6 mb-0">Invoices</p>
                                                        <small className="text-muted">Simple, List, Email Invoice </small>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="col">
                                                <Link href={process.env.PUBLIC_URL +"/salary-slip"} className="d-flex color-700" onClick={() => { setCollapsebig(!collapsebig) }}>
                                                    <div className="avatar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24">
                                                            <path xmlns="http://www.w3.org/2000/svg" d="M20,20c0,1.104-0.896,2-2,2H6c-1.104,0-2-0.896-2-2V4c0-1.104,0.896-2,2-2h8l6,6V20z" style={{ fill: 'var(--primary-color)' }} data-st="fill:var(--chart-color4);"></path>
                                                            <path xmlns="http://www.w3.org/2000/svg" className="st0" d="M16,8c-1.1,0-1.99-0.9-1.99-2L14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h1v-1.25C7,19.09,10.33,18,12,18  s5,1.09,5,2.75V22h1c1.1,0,2-0.9,2-2V8H16z M12,17c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S13.66,17,12,17z"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="flex-fill text-truncate">
                                                        <p className="h6 mb-0">SalarySlip</p>
                                                        <small className="text-muted">Simple SalarySlip</small>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="col">
                                                <Link href={process.env.PUBLIC_URL +"/expenses"} className="d-flex color-700" onClick={() => { setCollapsebig(!collapsebig) }}>
                                                    <div className="avatar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 38 38">
                                                            <circle xmlns="http://www.w3.org/2000/svg" className="stshockcolor" cx="19" cy="19" r="11" style={{ fill: 'var(--primary-color)' }} data-st="fill:var(--chart-color4);"></circle>
                                                            <path xmlns="http://www.w3.org/2000/svg" className="st0" d="M36,19c0,8.35-6.05,15.31-14,16.73V33.7c6.84-1.391,12-7.46,12-14.7c0-8.27-6.73-15-15-15C10.73,4,4,10.73,4,19  c0,8.27,6.73,15,15,15c0.34,0,0.67-0.01,1-0.04v2.01C19.67,35.99,19.34,36,19,36C9.63,36,2,28.37,2,19S9.63,2,19,2S36,9.63,36,19z   M19.257,17.588C15.516,16.591,15,15.487,15,14.443c0-1.43,1.4-2.185,3-2.383v3.008c0.412,0.175,0.973,0.375,1.772,0.587  c0.08,0.021,0.149,0.046,0.228,0.068v-3.596c1.726,0.359,3,1.504,3,2.872h2c0-2.442-2.159-4.478-5-4.912V8h-2v2.059  c-2.979,0.285-5,1.998-5,4.384c0,3.126,2.903,4.321,5.743,5.078C20.686,20.037,23,21.074,23,23.085c0,1.611-1.107,2.647-3,2.868  v-3.839c-0.468-0.244-1.069-0.475-1.771-0.661c-0.07-0.019-0.152-0.041-0.229-0.062v4.456c-1.692-0.393-3-1.549-3-2.848h-2  c0,2.424,2.153,4.448,5,4.903V30h2v-2.036c3.445-0.305,5-2.601,5-4.879C25,21.273,24.004,18.849,19.257,17.588z"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="flex-fill text-truncate">
                                                        <p className="h6 mb-0">Expenses</p>
                                                        <small className="text-muted">Expenses List</small>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="col">
                                                <Link href={process.env.PUBLIC_URL +"/stater-page"} className="d-flex color-700" onClick={() => { setCollapsebig(!collapsebig); GotoChangeMenu("stater-page") }}>
                                                    <div className="avatar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24">
                                                            <rect xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{ fill: 'none' }} fill="none"></rect>
                                                            <path xmlns="http://www.w3.org/2000/svg" d="M20,20c0,1.104-0.896,2-2,2H6c-1.104,0-2-0.896-2-2V4c0-1.104,0.896-2,2-2h8l6,6V20z" style={{ fill: 'var(--primary-color)' }} data-st="fill:var(--chart-color4);"></path>
                                                            <path xmlns="http://www.w3.org/2000/svg" className="st0" d="M11,13h2v2h-2V13z M20,8v12c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2V4c0-1.1,0.9-2,2-2h8l0.01,4  c0,1.1,0.891,2,1.99,2H20z M17,11h-2V9h-2v2h-2V9H9v2H7v2h2v2H7v2h2v2h2v-2h2v2h2v-2h2v-2h-2v-2h2V11z"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="flex-fill text-truncate">
                                                        <p className="h6 mb-0">Stater page</p>
                                                        <small className="text-muted">Start working with</small>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="col">
                                                <Link href={process.env.PUBLIC_URL +"/documentation"} className="d-flex color-700" onClick={() => { setCollapsebig(!collapsebig); GotoChangeMenu("documentation") }}>
                                                    <div className="avatar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 32 32">
                                                            <path xmlns="http://www.w3.org/2000/svg" d="M25.5,9.78V28.5c0,0.56-0.44,1-1,1h-17c-0.56,0-1-0.44-1-1v-25c0-0.55,0.45-1,1-1h10.72  L25.5,9.78z" style={{ fill: 'var(--primary-color)' }} data-st="fill:var(--chart-color4);"></path>
                                                            <path xmlns="http://www.w3.org/2000/svg" className="st0" d="M19.5,9.5c-0.561,0-1-0.439-1-1V2.793L25.207,9.5H19.5z"></path>
                                                            <path xmlns="http://www.w3.org/2000/svg" className="st0" d="M19,16c0-2.65,0.54-4,2-4c0.98,0,1.7,0.63,2,1.83l-0.89,0.6C21.92,13.49,21.43,13,21,13c-0.62,0-1,1.01-1,3  s0.38,3,1,3c0.43,0,0.92-0.49,1.11-1.43l0.89,0.6c-0.3,1.2-1.02,1.83-2,1.83C19.54,20,19,18.65,19,16z M18,16c0,3-0.9,4-2,4  c-1.1,0-2-1-2-4s0.9-4,2-4C17.1,12,18,13,18,16z M17,16c0-0.7,0-3-1-3s-1,2.3-1,3s0,3,1,3S17,16.7,17,16z M13,16.04  c0,2.88-0.8,3.96-2.4,3.96C9.8,20,9,20,9,20v-8c0,0,0.8,0,1.6,0C12.2,12,13,13.15,13,16.04z M12,16.03c0-2.17-0.52-3.03-1.33-3.03  c-0.4,0-0.67,0-0.67,0v6c0,0,0.27,0,0.67,0C11.48,19,12,18.2,12,16.03z M26,10v18.5c0,0.828-0.672,1.5-1.5,1.5h-17  C6.672,30,6,29.328,6,28.5v-25C6,2.672,6.672,2,7.5,2H18c0.621,0,0.646,0.232,1,0.586L25.414,9C25.768,9.354,26,9.368,26,10z   M19,8.5C19,8.776,19.224,9,19.5,9c0,0,2.639,0,4.5,0l-5-5V8.5z M25,10h-5.5C18.672,10,18,9.328,18,8.5V3c0,0-9.5,0-10.5,0  C7.225,3,7,3.224,7,3.5v25C7,28.776,7.225,29,7.5,29h17c0.275,0,0.5-0.224,0.5-0.5C25,28,25,10,25,10z"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="flex-fill text-truncate">
                                                        <p className="h6 mb-0">Documentation</p>
                                                        <small className="text-muted">How to Install</small>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="col">
                                                <Link href={process.env.PUBLIC_URL +"/changelog"} className="d-flex color-700" onClick={() => { setCollapsebig(!collapsebig); GotoChangeMenu("changelog") }}>
                                                    <div className="avatar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24">
                                                            <rect xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"></rect>
                                                            <polygon xmlns="http://www.w3.org/2000/svg" className="st0" points="22,6 22,12 20,12 20,9.42 13,16.41 8.95,12.36 2.65,17.76 1.35,16.24 9.05,9.64   13,13.59 18.58,8 16,8 16,6 "></polygon>
                                                            <polygon xmlns="http://www.w3.org/2000/svg" className="st1" points="11.91,12.5 10.58,13.99 8.95,12.36 2.65,17.76 1.35,16.24 9.05,9.64 "></polygon>
                                                        </svg>
                                                    </div>
                                                    <div className="flex-fill text-truncate">
                                                        <p className="h6 mb-0">Changelog</p>
                                                        <small className="text-muted">Changelog Update</small>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Header;