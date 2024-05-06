import React, { useEffect, useMemo, useState } from 'react';
import { Coin, OHLCData, MarketData } from '../type/coin';
import { insideApi } from '@/core/utils/axios';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import ChartSpinner from './ChartSpinner';

type ChartProps = {
    coin: Coin;
}

const CoinCandleStickChart = ({coin}:{coin:Coin}) => {
    const [ohlcData, setOHLCData] = useState<OHLCData>([]);
    const [isLoading, setIsLoading] = useState(true)
    const {id} = coin;
    const fetchDataForCandleStick = async () => {
        try{
            setIsLoading(true);
            const rs = await insideApi(`/exchange/api/coin-ohlc?days=1&id=${id}`);
            setOHLCData(rs.data);
        }
        catch(error){
            console.log(error)
        }
        finally{
            setIsLoading(false)
        }
    }

    const {
        seriesData: series,
        optionsData: options
    } = useMemo(() =>{
        const seriesData: ApexAxisChartSeries = [
            {
                data: ohlcData.map((item)=>{
                    const timeStamp = item[0];
                    const values = item.slice(1);
                    return {
                        x: new Date(timeStamp),
                        y:values
                    }
                })
            }
        ]
        const optionsData: ApexOptions = {
            chart: {
              type: 'candlestick',
              height: 350
            },
            title: {
              text: `${coin.name} CandleStick Chart`,
              align: 'left'
            },
            xaxis: {
              type: 'datetime',
            },
            yaxis: {
              tooltip: {
                enabled: true
              },
              opposite:true
            }
          }
        return {seriesData, optionsData};
    },[ohlcData])

    useEffect(() => {
        fetchDataForCandleStick()
    },[coin.id])
    return <ChartSpinner isLoading={isLoading}>
        <ReactApexChart options={options} series={series} type="candlestick" height={350} />
    </ChartSpinner>
}

const CoinLineChart = ({coin}:{coin:Coin}) => {
    const [priceHistoryData, setPriceHistoryData] = useState<MarketData>({
        prices:[],
        market_caps:[],
        total_volumes:[]
    })
    const [isLoading, setIsLoading] = useState(true)
    const {id} = coin;
    const fetchMarketData = async () => {
        try{
            setIsLoading(true);
            const rs = await insideApi(`/exchange/api/coin-market?days=1&id=${id}`);
            console.log(rs.data);
            setPriceHistoryData(rs.data);
        }
        catch(error){
            console.log(error)
        }
        finally{
            setIsLoading(false)
        }
    }

    const {seriesData: series, optionsData:options} = useMemo(() => {
        const seriesData: ApexAxisChartSeries = [
            {
                name:"Price",
                data:priceHistoryData.prices.map((item)=>{
                    return {
                        x:new Date(item[0]),
                        y: Number(item[1].toFixed(2)),
                    }
                })
            }
        ]
        const optionsData: ApexOptions = {
            chart: {
              type: 'line',
              height: 350
            },
            title: {
              text: `${coin.name} Line Chart`,
              align: 'left'
            },
            xaxis: {
              type: 'datetime',
            },
            yaxis: {
              tooltip: {
                enabled: true
              },
              opposite:true
            }
          }
        return {seriesData,optionsData}
    },[priceHistoryData])


    useEffect(() => {
        fetchMarketData()
    },[])

    return <ChartSpinner isLoading={isLoading}>
        <ReactApexChart
        options={options}
        series={series}
        type="line" 
        height={350} 
    />
    </ChartSpinner>
}

function Chart({coin}:ChartProps) {
    return (
        <div className="card">
            <div className="card-body">
                <div className="tradingview-widget-container">
                    <CoinCandleStickChart coin={coin}/>
                    <CoinLineChart coin={coin}/>
                </div>
            </div>
        </div>
    )
}

export default Chart;