import React, { useEffect, useMemo, useState } from 'react';
import { Coin, OHLCData } from '../type/coin';
import { insideApi } from '@/core/utils/axios';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

type ChartProps = {
    coin: Coin;
}

function Chart({coin}:ChartProps) {
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
              text: 'CandleStick Chart',
              align: 'left'
            },
            xaxis: {
              type: 'datetime'
            },
            yaxis: {
              tooltip: {
                enabled: true
              }
            }
          }
        return {seriesData, optionsData};
    },[ohlcData])

    useEffect(() => {
        fetchDataForCandleStick()
    },[coin.id])


    return (
        <div className="card">
            <div className="card-body">
                <div className="tradingview-widget-container">
                <ReactApexChart options={options} series={series} type="candlestick" height={350} />
                </div>
            </div>
        </div>
    )
}

export default Chart;