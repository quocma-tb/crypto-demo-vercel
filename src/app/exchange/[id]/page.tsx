'use client'
import React, { useEffect, useState } from "react"; 
import Chart from "./components/Chart";
import { insideApi } from "@/core/utils/axios";
import { Spinner } from "react-bootstrap";
import { Coin } from "./type/coin";
import Image from "next/image";
;

type ExchangeProps = {
    params:{
        id: string
    }
}

function Exchange(props:ExchangeProps) {
    const coinId = (props.params.id)
    const [isFetchCoinDetailLoading, setIsFetchCoinDetailLoading] = useState(true);
    const [error, setError] = useState<string|undefined>(undefined);
    const [coin, setCoin] = useState<Coin|undefined>(undefined);
    const fetchCoinDetail = async () => {
        try{
            const rs = await insideApi(`/exchange/api/coin-detail?id=${coinId}`);
            setCoin(rs.data);  
        }
        catch(error){
            setError(error.error)
        }
        finally{
            setIsFetchCoinDetailLoading(false)
        }

    }

    useEffect(() => {
        if(!coinId) return;
        setIsFetchCoinDetailLoading(true);
        fetchCoinDetail()
    },[coinId])

    if(isFetchCoinDetailLoading){
        return <div className="d-flex align-items-center justify-content-center">
            <Spinner/>
        </div>
    }

    if(error || !coin){
        return <div className="text-center font-weight-bold text-danger">Get an error when fetching data {error}</div>
    }


    return (<>
        <div className="body-header border-bottom d-flex py-3 mb-3">
            <div className="container-xxl">
                <div className="d-flex align-items-center column-gap-2">
                        <Image
                            src={coin.image.small}
                            width={24}
                            height={24}
                            objectFit="cover"
                            alt={`${coin.name} image`}
                        />
                    <h1 className="h4 leading mt-2">{`${coin.name} Price`}</h1>
                </div>
            </div>
        </div>
        <div className="container-xxl">
            <div className="row g-3 mb-3">
                <div className="col-md-12">
                    <Chart coin={coin}/>
                </div>
            </div>
        </div>
    </>
    )
}

export default Exchange;