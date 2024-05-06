import React, { useEffect, useMemo, useState } from 'react';
import { Coin, MarketData } from '../type/coin';
import { insideApi } from '@/core/utils/axios';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import ChartSpinner from './ChartSpinner';
import { convertNumberToUSD } from '../utils/currency';
const CoinLineChart = ({coin, days}:{coin:Coin, days:number}) => {
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
            const rs = await insideApi(`/exchange/api/coin-market?days=${days}&id=${id}`);
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
                        y: item[1],
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
              opposite:true,
              labels:{
                formatter:(val) => {
                    return `${convertNumberToUSD(val)}`
                }
              }
            }
          }
        return {seriesData,optionsData}
    },[priceHistoryData])


    useEffect(() => {
        fetchMarketData()
    },[coin.id,days])

    return <ChartSpinner isLoading={isLoading}>
        <ReactApexChart
        options={options}
        series={series}
        type="line" 
        height={350} 
    />
    </ChartSpinner>
}
export default CoinLineChart;