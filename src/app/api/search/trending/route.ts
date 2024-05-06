import { publicApi } from '@/core/utils/axios';

export type Coin = {
  id: string,
  coin_id: string,
  name: string,
  symbol: string,
  market_cap_rank: string ,
  thumb: string 
  small: string 
  large: string
  slug: string,
  price_btc: string
  score: string ,
  data: {
    price: number,
    price_btc: string,
    price_change_percentage_24h: Record<string, number>,
    market_cap: string
    market_cap_btc: string,
    total_volume: string
    total_volume_btc: string,
    sparkline: string
    content: string
  }
}

export type CoinItem = {
 item: Coin
}

export type NFTS = {
  id: string,
  name: string
  symbol: string,
  thumb: string,
  nft_contract_id: number
  native_currency_symbol: string,
  floor_price_in_native_currency: number,
  floor_price_24h_percentage_change: number,
  data: {
    floor_price: string,
    floor_price_in_usd_24h_percentage_change: string,
    h24_volume: string,
    h24_average_sale_price: string,
    sparkline: string,
    content: null
  }
}


export type TrendingData = {
  coins: CoinItem[]
  nfts: NFTS[]
}

export async function GET () {
  const result = await publicApi.get('/search/trending')
  return Response.json(result.data || {})
}