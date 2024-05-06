import React, { useState } from 'react';
import { Coin } from '../type/coin';
import { Nav, Tab } from 'react-bootstrap';
import { ChartOption, DateOption } from '../type/filter';
import CoinCandleStickChart from './CoinCandleStickChart';
import CoinLineChart from './CoinLineChart';

type ChartProps = {
    coin: Coin;
}

const TAB_CHART_TYPE_KEY = 'chart-type'
const LINE_CHART_KEY = 'Line';
const CANDLE_CHART_KEY = 'Candle';

const chartOptions: ChartOption[] = [
    {
        label:"Line",
        value: LINE_CHART_KEY
    },
    {
        label:"Candle",
        value:CANDLE_CHART_KEY,
    }
]

const dateOptions : DateOption[] = [
    {
        label: '24h',
        value: 1,
    },
    {
        label:'7d',
        value:7,
    },
    {
        label:'1m',
        value: 30,
    },
    {
        label:'3m',
        value: 90
    }
]

function Chart({coin}:ChartProps) {

    const [chartSelected, setChartSelected] = useState<ChartOption>(chartOptions[0])
    const [dateSelected, setDateSelected] = useState<DateOption>(dateOptions[0]);

    const handleClickOnChartTypeOption = (e:React.MouseEvent<HTMLElement>,option:ChartOption) => {
        e.preventDefault();
        setChartSelected(option)
    }
    
    const handleClickOnDateOption = (e:React.MouseEvent<HTMLElement>,option:DateOption) => {
        e.preventDefault();
        setDateSelected(option)
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="tradingview-widget-container">
                    <Tab.Container defaultActiveKey={TAB_CHART_TYPE_KEY}>
                        <Nav className="nav nav-tabs tab-body-header rounded d-inline-flex" role="tablist">
                            {chartOptions.map((option,index)=>{
                                const isActive = option.value === chartSelected.value;
                                return <Nav.Item key={`chart-type-${option.value}-${index}`} className="nav-item"><Nav.Link onClick={(e)=>handleClickOnChartTypeOption(e,option)} className={`nav-link ${isActive ? 'active' : ''}`} data-bs-toggle="tab" role="tab" aria-selected="false">{option.label}</Nav.Link></Nav.Item>
                            })}
                        </Nav>
                        <Nav className="nav nav-tabs tab-body-header rounded d-inline-flex mb-4 ms-4" role="tablist">
                            {dateOptions.map((option,index)=>{
                                const isActive = option.value === dateSelected.value;
                                return <Nav.Item key={`chart-date-${option.value}-${index}`} className="nav-item"><Nav.Link onClick={(e)=>handleClickOnDateOption(e,option)} className={`nav-link ${isActive ? 'active' : ''}`} data-bs-toggle="tab" role="tab" aria-selected="false">{option.label}</Nav.Link></Nav.Item>
                            })}
                        </Nav>
                        <Tab.Content className='tab-content'>
                            <Tab.Pane className='tab-pane fade' id={TAB_CHART_TYPE_KEY} eventKey={TAB_CHART_TYPE_KEY}>
                                {chartSelected.value === LINE_CHART_KEY ? <CoinLineChart days={dateSelected.value} coin={coin}/> : <CoinCandleStickChart days={dateSelected.value} coin={coin}/>}
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </div>
        </div>
    )
}

export default Chart;