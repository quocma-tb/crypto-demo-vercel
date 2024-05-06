import { publicApi } from '@/core/utils/axios';
import type { NextApiRequest } from 'next';
import { Coin, NFTS } from './trending/route';
import { NextRequest } from 'next/server';

export type SearchQueryParams = {
  query: string
}

export type SearchResultData = {
  coins: Coin[]
  nfts: NFTS[]
}
 
export async function GET(req: NextRequest) {
  const result = await publicApi.get<SearchResultData>('/search', {
    params: req.nextUrl.searchParams
  })
 console.log(result.config.url)
  return Response.json(result.data.coins)
}