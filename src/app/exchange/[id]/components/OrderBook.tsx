'use client'
import React from 'react';
import { Nav, Tab } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { OrderbookDatafirst, OrderbookDatasecond, OrderbookLongData, OrderbookSortData } from '../../api/OrderbookData';

function OrderBook() {
    return (
            <div className="card">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                    <h6 className="mb-0 fw-bold ">BTC/USDT Order Book</h6>
                </div>
                <div className="card-body">
                    <Tab.Container defaultActiveKey='first'>
                        <Nav className="nav nav-tabs tab-body-header rounded d-inline-flex" role="tablist">
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='first' data-bs-toggle="tab" href="#Both" role="tab" aria-selected="false">Both</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='second' data-bs-toggle="tab" href="#Long" role="tab" aria-selected="false">Long</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link " eventKey='third' data-bs-toggle="tab" href="#Short" role="tab" aria-selected="true">Short</Nav.Link></Nav.Item>
                        </Nav>
                        <Tab.Content className="tab-content">
                            <Tab.Pane className="tab-pane fade" id="Both" eventKey='first'>
                                <div id="priceTableup_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 mb-2 " style={{ display: 'flex',alignItems: 'center' }}>
                                            <div id="myDataTable_filter" className="dataTables_filter">
                                                <label className='d-flex align-items-center'>Search:<div className='mx-1'><input type="search" className="form-control" /></div></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <DataTable
                                                title={OrderbookDatafirst.title}
                                                columns={OrderbookDatafirst.columns}
                                                data={OrderbookDatafirst.rows}
                                                defaultSortFieldId="title"
                                                selectableRows={false}
                                                highlightOnHover={true}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-5">
                                            <div className="dataTables_info" id="priceTableup_info" role="status" aria-live="polite">Showing 1 to 10 of 10 entries</div>
                                        </div>
                                        <div className="col-sm-12 col-md-7">
                                            <div className="dataTables_paginate paging_simple_numbers" id="priceTableup_paginate">
                                                <ul className="pagination">
                                                    <li className="paginate_button page-item previous disabled" id="priceTableup_previous">
                                                        <a href="#!" className="page-link">Previous</a>
                                                    </li>
                                                    <li className="paginate_button page-item active">
                                                        <a href="#!" className="page-link">1</a>
                                                    </li>
                                                    <li className="paginate_button page-item next disabled" id="priceTableup_next">
                                                        <a href="#!" className="page-link">Next</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="priceTabledown_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 mb-2 " style={{ display: 'flex',alignItems: 'center' }}>
                                            <div id="myDataTable_filter" className="dataTables_filter">
                                                <label className='d-flex align-items-center'>Search:<div className='mx-1'><input type="search" className="form-control" /></div></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <DataTable
                                                title={OrderbookDatasecond.title}
                                                columns={OrderbookDatasecond.columns}
                                                data={OrderbookDatasecond.rows}
                                                defaultSortFieldId="title"
                                                selectableRows={false}
                                                highlightOnHover={true}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-5">
                                            <div className="dataTables_info" id="priceTabledown_info" role="status" aria-live="polite">Showing 1 to 10 of 10 entries</div>
                                        </div>
                                        <div className="col-sm-12 col-md-7">
                                            <div className="dataTables_paginate paging_simple_numbers" id="priceTabledown_paginate">
                                                <ul className="pagination">
                                                    <li className="paginate_button page-item previous disabled" id="priceTabledown_previous">
                                                        <a href="#!" className="page-link">Previous</a>
                                                    </li>
                                                    <li className="paginate_button page-item active">
                                                        <a href="#!" className="page-link">1</a>
                                                    </li>
                                                    <li className="paginate_button page-item next disabled" id="priceTabledown_next">
                                                        <a href="#!" className="page-link">Next</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane className="tab-pane fade" id="Long" eventKey='second'>

                                <div id="priceTableuponly_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 mb-2 " style={{ display: 'flex',alignItems: 'center' }}>
                                            <div id="myDataTable_filter" className="dataTables_filter">
                                                <label className='d-flex align-items-center'>Search:<div className='mx-1'><input type="search" className="form-control" /></div></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <DataTable
                                                title={OrderbookLongData.title}
                                                columns={OrderbookLongData.columns}
                                                data={OrderbookLongData.rows}
                                                defaultSortFieldId="title"
                                                selectableRows={false}
                                                highlightOnHover={true}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-5">
                                            <div className="dataTables_info" id="priceTableuponly_info" role="status" aria-live="polite">Showing 1 to 10 of 10 entries</div>
                                        </div>
                                        <div className="col-sm-12 col-md-7">
                                            <div className="dataTables_paginate paging_simple_numbers" id="priceTableuponly_paginate">
                                                <ul className="pagination">
                                                    <li className="paginate_button page-item previous disabled" id="priceTableuponly_previous">
                                                        <a href="#!" className="page-link">Previous</a>
                                                    </li>
                                                    <li className="paginate_button page-item active">
                                                        <a href="#!" className="page-link">1</a>
                                                    </li>
                                                    <li className="paginate_button page-item next disabled" id="priceTableuponly_next">
                                                        <a href="#!" className="page-link">Next</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane className="tab-pane fade" id="Short" eventKey='third'>

                                <div id="priceTabledownonly_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 mb-2 " style={{ display: 'flex',alignItems: 'center' }}>
                                            <div id="myDataTable_filter" className="dataTables_filter">
                                                <label className='d-flex align-items-center'>Search:<div className='mx-1'><input type="search" className="form-control" /></div></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <DataTable
                                                title={OrderbookSortData.title}
                                                columns={OrderbookSortData.columns}
                                                data={OrderbookSortData.rows}
                                                defaultSortFieldId="title"
                                                selectableRows={false}
                                                highlightOnHover={true}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-5">
                                            <div className="dataTables_info" id="priceTabledownonly_info" role="status" aria-live="polite">Showing 1 to 10 of 10 entries</div>
                                        </div>
                                        <div className="col-sm-12 col-md-7">
                                            <div className="dataTables_paginate paging_simple_numbers" id="priceTabledownonly_paginate">
                                                <ul className="pagination">
                                                    <li className="paginate_button page-item previous disabled" id="priceTabledownonly_previous">
                                                        <a href="#!" className="page-link">Previous</a>
                                                    </li>
                                                    <li className="paginate_button page-item active">
                                                        <a href="#!" className="page-link">1</a>
                                                    </li>
                                                    <li className="paginate_button page-item next disabled" id="priceTabledownonly_next">
                                                        <a href="#!" className="page-link">Next</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </div>
    )
}

export default OrderBook;