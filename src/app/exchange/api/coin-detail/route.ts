import { publicApi } from "@/core/utils/axios";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const res = await publicApi(`/coins/${id}?vs_currency=usd`);
    return Response.json(res.data);
  }