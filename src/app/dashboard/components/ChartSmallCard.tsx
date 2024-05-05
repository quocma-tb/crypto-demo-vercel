'use client'

import React from "react";
import { FirstChartData, FourthChartData, SecondChartData, ThirdChartData } from "../api/FirstChartData";
import Apex from "./Apex";

function ChartSmallCard() {

    return (
        <div className="row g-3 mb-3 row-cols-1 row-cols-md-2 row-cols-lg-4">
            <div className="col">
                <div className="card">
                    <div className="card-body d-flex align-items-center">
                        <div className="flex-fill text-truncate">
                            <span className="text-muted small text-uppercase">BNB/BUSD</span>
                            <div className="d-flex flex-column">
                                <div className="price-block">
                                    <span className="fs-6 fw-bold color-price-up">418</span>
                                    <span className="small text-muted px-2">$418</span>
                                </div>
                                <div className="price-report">
                                    <span className="small text-danger">- 1.28% <i className="fa fa-level-down"></i></span>
                                    <span className="small text-muted px-2">Volume:109,267,865.92 BUSD</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        FirstChartData.map((data, i) => {
                            return <Apex data={data} key={'s'+i}/>
                        })
                    }

                    
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="card-body d-flex align-items-center">
                        <div className="flex-fill text-truncate">
                            <span className="text-muted small text-uppercase">ETH/USDT</span>
                            <div className="d-flex flex-column">
                                <div className="price-block">
                                    <span className="fs-6 fw-bold color-price-down">3499</span>
                                    <span className="small text-muted px-2">$3500</span>
                                </div>
                                <div className="price-report">
                                    <span className="small text-danger">- 1.79% <i className="fa fa-level-down"></i></span>
                                    <span className="small text-muted px-2">Volume:541,545,011.76 USDT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    {
                        SecondChartData.map((data, i) => {
                            return <Apex data={data} key={'a'+i}/>
                        })
                    }

                    <div className="resize-triggers"><div className="expand-trigger"><div style={{ width: '247px', height: '132px' }}></div></div><div className="contract-trigger"></div></div></div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="card-body d-flex align-items-center">
                        <div className="flex-fill text-truncate">
                            <span className="text-muted small text-uppercase">DOT/BUSD</span>
                            <div className="d-flex flex-column">
                                <div className="price-block">
                                    <span className="fs-6 fw-bold">35.00</span>
                                    <span className="small text-muted px-2">$35</span>
                                </div>
                                <div className="price-report">
                                    <span className="small text-success">+ 3.78% <i className="fa fa-level-up"></i></span>
                                    <span className="small text-muted px-2">Volume:63,324,607.43 BUSD BUSD</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        ThirdChartData.map((data, i) => {
                            return <Apex data={data} key={'e'+i}/>
                        })
                    }
                    <div className="resize-triggers"><div className="expand-trigger"><div style={{ width: '247px', height: '132px' }}></div></div><div className="contract-trigger"></div></div></div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="card-body d-flex align-items-center">
                        <div className="flex-fill text-truncate">
                            <span className="text-muted small text-uppercase">GRT/USDT</span>
                            <div className="d-flex flex-column">
                                <div className="price-block">
                                    <span className="fs-6 fw-bold color-price-up">0.8413</span>
                                    <span className="small text-muted px-2">$1</span>
                                </div>
                                <div className="price-report">
                                    <span className="small text-danger">- 1.11% <i className="fa fa-level-down"></i></span>
                                    <span className="small text-muted px-2">Volume:28,538,521.44 USDT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        FourthChartData.map((data, i) => {
                            return <Apex data={data} key={'f'+i}/>
                        })
                    }
                    <div className="resize-triggers"><div className="expand-trigger"><div style={{ width: '247px', height: '132px' }}></div></div><div className="contract-trigger"></div></div></div>
            </div>
        </div>
    )
}

export default ChartSmallCard;