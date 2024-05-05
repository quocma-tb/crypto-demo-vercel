import React from 'react';

function Chart() {
    return (
        <div className="card">
            <div className="card-body">
                <div className="tradingview-widget-container">
                    <div id='tradingview_e05b7' style={{ height: '610px' }}>
                        <div id='tradingview_d89db-wrapper' style={{ position: "relative", boxSizing: "content-box", width: "100%", height: "100%", margin: " 0 auto !important", padding: "0 !important" }} >
                            <div style={{ width: "100%", height: "100%", background: "transparent", padding: "0 !important" }}>
                                <iframe 
                                id='tradingview_d89db' 
                                src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_d89db&symbol=BITSTAMP%3ABTCUSD&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&details=1&calendar=1&hotlist=1&studies=%5B%5D&theme=light&style=1&timezone=Etc%2FUTC&withdateranges=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=in&utm_source=&utm_medium=widget&utm_campaign=chart&utm_term=BITSTAMP%3ABTCUSD"
                                style={{width: "100%", height: "100%", margin: "0 !important", padding: "0 !important"}}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chart;