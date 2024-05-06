import React, { useEffect, useMemo, useState } from 'react';
import { Coin, OHLCData } from '../type/coin';
import { insideApi } from '@/core/utils/axios';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import ChartSpinner from './ChartSpinner';
const CoinCandleStickChart = ({coin, days}:{coin:Coin, days:number;}) => {
    const [ohlcData, setOHLCData] = useState<OHLCData>([]);
    const [isLoading, setIsLoading] = useState(true)
    const {id} = coin;
    const fetchDataForCandleStick = async () => {
        try{
            setIsLoading(true);
            const rs = await insideApi(`/exchange/api/coin-ohlc?days=${days}&id=${id}`);
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
    },[coin.id, days])
    return <ChartSpinner isLoading={isLoading}>
        <ReactApexChart options={options} series={series} type="candlestick" height={350} />
    </ChartSpinner>
}
export default CoinCandleStickChart;