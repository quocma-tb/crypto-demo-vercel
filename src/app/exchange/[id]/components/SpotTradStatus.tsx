'use client'
import React from 'react';
import { Tab, Nav } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { FunData, OpenOrderData, OrderHistoryData, TradeHistoryData } from '../../api/OrderbookData';


function SpotTradStatus() {
    return (<div className="card">
        <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
            <h6 className="mb-0 fw-bold ">Spot trade Status</h6>
        </div>
        <div className="card-body">
            <Tab.Container defaultActiveKey='first'>
                <Nav className="nav nav-tabs tab-body-header rounded d-inline-flex mb-3" role="tablist">
                    <Nav.Item className="nav-item"><Nav.Link className="nav-link " eventKey='first' data-bs-toggle="tab" href="#OpenOrder" role="tab" aria-selected="true">Open Order(7)</Nav.Link></Nav.Item>
                    <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='second' data-bs-toggle="tab" href="#OrderHistory" role="tab" aria-selected="false">Order History</Nav.Link></Nav.Item>
                    <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='third' data-bs-toggle="tab" href="#TradeHistory" role="tab" aria-selected="false">Trade History</Nav.Link></Nav.Item>
                    <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='fourth' data-bs-toggle="tab" href="#Funds" role="tab" aria-selected="false">Funds</Nav.Link></Nav.Item>
                </Nav>
                <Tab.Content className="tab-content" >
                    <Tab.Pane className="tab-pane fade " id="OpenOrder" eventKey='first'>
                        <DataTable
                            title={OpenOrderData.title}
                            columns={OpenOrderData.columns as any}
                            data={OpenOrderData.rows}
                            defaultSortFieldId="title"
                            selectableRows={false}
                            highlightOnHover={true}
                        />
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" id="OrderHistory" eventKey='second'>
                        <DataTable
                            title={OrderHistoryData.title}
                            columns={OrderHistoryData.columns}
                            data={OrderHistoryData.rows}
                            defaultSortFieldId="title"
                            selectableRows={false}
                            highlightOnHover={true}
                        />
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" id="TradeHistory" eventKey='third'>
                        <DataTable
                            title={TradeHistoryData.title}
                            columns={TradeHistoryData.columns}
                            data={TradeHistoryData.rows}
                            defaultSortFieldId="title"
                            selectableRows={false}
                            highlightOnHover={true}
                        />
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" id="Funds" eventKey='fourth'>
                        <DataTable
                            title={FunData.title}
                            columns={FunData.columns}
                            data={FunData.rows}
                            defaultSortFieldId="title"
                            selectableRows={false}
                            highlightOnHover={true}
                        />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    </div>
    )
}

export default SpotTradStatus;