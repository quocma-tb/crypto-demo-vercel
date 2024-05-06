'use client'
import React from 'react';
import { Nav, Tab } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Spot() {
    return (
        <div className="card mb-3">
            <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold ">Spot</h6>
            </div>
            <div className="card-body">
            <Tab.Container defaultActiveKey='first'>
                <Nav className="nav nav-tabs tab-body-header rounded d-inline-flex" role="tablist">
                    <Nav.Item className="nav-item"><Nav.Link className="nav-link " eventKey='first' data-bs-toggle="tab" href="#Limit" role="tab">Limit</Nav.Link></Nav.Item>
                    <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='second' data-bs-toggle="tab" href="#Market" role="tab">Market</Nav.Link></Nav.Item>
                    <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='third' data-bs-toggle="tab" href="#Stoplimit" role="tab">Stop Limit</Nav.Link></Nav.Item>
                </Nav>
                <Tab.Content className="tab-content">

                    <Tab.Pane className="tab-pane fade " id="Limit" eventKey='first'>
                        <div className="row g-3">
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center justify-content-between my-3">
                                    <span className="small text-muted">Avbl</span>
                                    <span className="">310.800000 USDT</span>
                                </div>
                                <form>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Price</span>
                                        <input type="text" className="form-control" onChange={()=>{}}/>
                                            <span className="input-group-text">USDT</span>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Amount</span>
                                        <input type="text" className="form-control" onChange={()=>{}}/>
                                            <span className="input-group-text">BTC</span>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="mb-2 d-flex justify-content-between align-items-center w-100">
                                            <span className="text-muted">0%</span>
                                            <span className="text-muted px-2">25%</span>
                                            <span className="text-muted px-1">50%</span>
                                            <span className="text-muted px-1">75%</span>
                                            <span className="text-muted">100%</span>
                                        </div>
                                        <Form.Range />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Total</span>
                                        <input type="text" className="form-control" onChange={()=>{}}/>
                                            <span className="input-group-text">USDT</span>
                                    </div>
                                    <button type="submit" className="btn flex-fill btn-light-success py-2 fs-5 text-uppercase px-5 w-100">BUY BTC</button>
                                </form>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center justify-content-between my-3">
                                    <span className="small text-muted">Avbl</span>
                                    <span className="">0.0000000 BTC</span>
                                </div>
                                <form>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Price</span>
                                        <input type="text" className="form-control" onChange={()=>{}}/>
                                            <span className="input-group-text">USDT</span>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Amount</span>
                                        <input type="text" className="form-control" onChange={()=>{}}/>
                                            <span className="input-group-text">BTC</span>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="mb-2 d-flex justify-content-between align-items-center w-100">
                                            <span className="text-muted">0%</span>
                                            <span className="text-muted px-2">25%</span>
                                            <span className="text-muted px-1">50%</span>
                                            <span className="text-muted px-1">75%</span>
                                            <span className="text-muted">100%</span>
                                        </div>
                                        <Form.Range />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Total</span>
                                        <input type="text" className="form-control" onChange={()=>{}}/>
                                            <span className="input-group-text">USDT</span>
                                    </div>
                                    <button type="submit" className="btn flex-fill btn-light-danger py-2 fs-5 text-uppercase px-5 w-100">SELL BTC</button>
                                </form>
                            </div>
                        </div>
                    </Tab.Pane>

                    <Tab.Pane className="tab-pane fade" id="Market" eventKey='second'>
                        <div className="row g-3">
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center justify-content-between my-3">
                                    <span className="small text-muted">Avbl</span>
                                    <span className="">310.800000 USDT</span>
                                </div>
                                <form>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Price</span>
                                        <input type="text" className="form-control" placeholder="Market" onChange={()=>{}}/>
                                            <span className="input-group-text">USDT</span>
                                    </div>
                                    <div className="input-group mb-3">
                                        <button type="button" className="btn btn-outline-secondary">Amount</button>
                                        <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Amount</a></li>
                                            <li><a className="dropdown-item" href="#">Total</a></li>
                                        </ul>
                                        <input type="text" className="form-control" onChange={()=>{}}/>
                                            <span className="input-group-text">BTC</span>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="mb-2 d-flex justify-content-between align-items-center w-100">
                                            <span className="text-muted">0%</span>
                                            <span className="text-muted px-2">25%</span>
                                            <span className="text-muted px-1">50%</span>
                                            <span className="text-muted px-1">75%</span>
                                            <span className="text-muted">100%</span>
                                        </div>
                                        <Form.Range />
                                    </div>
                                    <button type="submit" className="btn flex-fill btn-light-success py-2 fs-5 text-uppercase px-5 w-100">BUY BTC</button>
                                </form>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center justify-content-between my-3">
                                    <span className="small text-muted">Avbl</span>
                                    <span className="">0.0000000 BTC</span>
                                </div>
                                <form>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Price</span>
                                        <input type="text" className="form-control" placeholder="Market" onChange={()=>{}}/>
                                            <span className="input-group-text">USDT</span>
                                    </div>
                                    <div className="input-group mb-3">
                                        <button type="button" className="btn btn-outline-secondary">Amount</button>
                                        <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Amount</a></li>
                                            <li><a className="dropdown-item" href="#">Total</a></li>
                                        </ul>
                                        <input type="text" className="form-control"/>
                                            <span className="input-group-text">BTC</span>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="mb-2 d-flex justify-content-between align-items-center w-100">
                                            <span className="text-muted">0%</span>
                                            <span className="text-muted px-2">25%</span>
                                            <span className="text-muted px-1">50%</span>
                                            <span className="text-muted px-1">75%</span>
                                            <span className="text-muted">100%</span>
                                        </div>
                                        <Form.Range />
                                    </div>
                                    <button type="submit" className="btn flex-fill btn-light-danger py-2 fs-5 text-uppercase px-5 w-100">SELL BTC</button>
                                </form>
                            </div>
                        </div>
                    </Tab.Pane>

                    <Tab.Pane className="tab-pane fade" id="Stoplimit" eventKey='third'>
                        <div className="row g-3">
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center justify-content-between my-3">
                                    <span className="small text-muted">Avbl</span>
                                    <span className="">310.800000 USDT</span>
                                </div>
                                <form>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Stop</span>
                                        <input type="text" className="form-control" onChange={()=>{}}/>
                                            <span className="input-group-text">USDT</span>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Limit</span>
                                        <input type="text" className="form-control" onChange={()=>{}}/>
                                            <span className="input-group-text">USDT</span>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Amount</span>
                                        <input type="text" className="form-control" onChange={()=>{}}/>
                                            <span className="input-group-text">BTC</span>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="mb-2 d-flex justify-content-between align-items-center w-100">
                                            <span className="text-muted">0%</span>
                                            <span className="text-muted px-2">25%</span>
                                            <span className="text-muted px-1">50%</span>
                                            <span className="text-muted px-1">75%</span>
                                            <span className="text-muted">100%</span>
                                        </div>
                                        <Form.Range />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Total</span>
                                        <input type="text" className="form-control" onChange={()=>{}}/>
                                            <span className="input-group-text">USDT</span>
                                    </div>
                                    <button type="submit" className="btn flex-fill btn-light-success py-2 fs-5 text-uppercase px-5 w-100">BUY BTC</button>
                                </form>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center justify-content-between my-3">
                                    <span className="small text-muted">Avbl</span>
                                    <span className="">0.0000000 BTC</span>
                                </div>
                                <form>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Stop</span>
                                        <input type="text" className="form-control" onChange={()=>{}}/>
                                            <span className="input-group-text">USDT</span>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Limit</span>
                                        <input type="text" className="form-control" onChange={()=>{}}/>
                                            <span className="input-group-text">USDT</span>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Amount</span>
                                        <input type="text" className="form-control" onChange={()=>{}}/>
                                            <span className="input-group-text">BTC</span>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="mb-2 d-flex justify-content-between align-items-center w-100">
                                            <span className="text-muted">0%</span>
                                            <span className="text-muted px-2">25%</span>
                                            <span className="text-muted px-1">50%</span>
                                            <span className="text-muted px-1">75%</span>
                                            <span className="text-muted">100%</span>
                                        </div>
                                        <Form.Range />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Total</span>
                                        <input type="text" className="form-control" onChange={()=>{}}/>
                                            <span className="input-group-text">USDT</span>
                                    </div>
                                    <button type="submit" className="btn flex-fill btn-light-danger py-2 fs-5 text-uppercase px-5 w-100">SELL BTC</button>
                                </form>
                            </div>
                        </div>
                    </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
            </div>
        </div>
    )
}
export default Spot;