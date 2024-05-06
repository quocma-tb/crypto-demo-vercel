import { publicApi } from "@/core/utils/axios";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const days = searchParams.get('days');
    const res = await publicApi(`/coins/${id}/ohlc?days=${days}&vs_currency=usd`);
    return Response.json(res.data);
  }