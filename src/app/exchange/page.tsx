import React from "react"; 
import PageTitle from "@/core/components/page-title";
import Chart from "./components/Chart";
import OrderBook from "./components/OrderBook";
import Spot from "./components/Spot";
import SpotTradStatus from "./components/SpotTradStatus";
;

function Exchange() {
    return (<>
        <div className="body-header border-bottom d-flex py-3 mb-3">
            <div className="container-xxl">
                <div className="row align-items-center g-2">
                    <PageTitle pagetitle='Exchange' downloadbutton='Download' reportbutton='Generate Report' />
                </div>
            </div>
        </div>
        <div className="container-xxl">
            <div className="row g-3 mb-3">
                <div className="col-md-12">
                    <Chart />
                </div>
            </div>
            <div className="row g-3 mb-3">
                <div className="col-xxl-5">
                    <OrderBook />
                </div>
                <div className="col-xxl-7">
                    <Spot />
                    <SpotTradStatus />
                </div>
            </div>
        </div>
    </>
    )
}

export default Exchange;