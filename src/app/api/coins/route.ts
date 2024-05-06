import { publicApi } from '@/core/utils/axios';
import { NextRequest } from 'next/server';

export type SearchQueryParams = {
  query: string
}


export type CoinWithMarketData = {
  id: string,
  symbol: string,
  name: string,
  image: string,
  current_price: number,
  market_cap: number,
  market_cap_rank: number,
  fully_diluted_valuation: number,
  total_volume: number,
  high_24h: number,
  low_24h: number,
  price_change_24h: number,
  price_change_percentage_24h: number,
  market_cap_change_24h: number,
  market_cap_change_percentage_24h: number,
  circulating_supply: number,
  total_supply: number,
  max_supply: number,
  ath: number,
  ath_change_percentage: number,
  ath_date: string,
  atl: number,
  atl_change_percentage: number,
  atl_date: string,
  roi: null,
  last_updated: string
  sparkline_in_7d: {
    price: number[]
  },
  price_change_percentage_1h_in_currency: number,
  price_change_percentage_24h_in_currency: number,
  price_change_percentage_7d_in_currency: number
}
 
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  searchParams.append('vs_currency', 'usd')
  const result = await publicApi.get<CoinWithMarketData[]>(`/coins/markets`, {
    params: searchParams
  })
  return Response.json(result.data)
}