'use client'

import React from "react";
import { Nav, Tab } from "react-bootstrap";

function LoginActivity() {
    return (
        <div className="col-xl-8 col-xxl-7">
            <div className="card">
                <Tab.Container defaultActiveKey='second'>
                    <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom align-items-center flex-wrap">
                        <h6 className="mb-0 fw-bold">Login Activity</h6>
                        <Nav className="nav nav-tabs tab-body-header rounded d-inline-flex mt-2 mt-md-0" role="tablist">
                            <Nav.Item className="nav-item"><Nav.Link eventKey='first' className="nav-link" data-bs-toggle="tab" href="#Activity" role="tab" aria-selected="false">Activity</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link eventKey='second' className="nav-link " data-bs-toggle="tab" href="#Devices" role="tab" aria-selected="true">Devices</Nav.Link></Nav.Item>
                        </Nav>
                    </div>
                    <div className="card-body">
                        <Tab.Content className="tab-content">
                            <Tab.Pane className="tab-pane fade" id="Activity" eventKey='first'>
                                <ul className="list-unstyled list mb-0">
                                    <li className="d-flex align-items-center py-2">
                                        <div className="avatar rounded no-thumbnail chart-text-color1"><i className="fa fa-globe" aria-hidden="true"></i></div>
                                        <div className="flex-fill ms-3">
                                            <div className="h6 mb-0">web</div>
                                            <small className="text-muted">Mumbai India</small>
                                        </div>
                                        <div className="flex-end">
                                            <span className="d-block text-end">122.170.109.22</span>
                                            <span className="text-muted d-block small">2021-09-30 11:00:52</span>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center py-2">
                                        <div className="avatar rounded no-thumbnail chart-text-color2"><i className="fa fa-globe" aria-hidden="true"></i></div>
                                        <div className="flex-fill ms-3">
                                            <div className="h6 mb-0">web</div>
                                            <small className="text-muted">Mumbai India</small>
                                        </div>
                                        <div className="flex-end">
                                            <span className="d-block text-end">122.170.109.22</span>
                                            <span className="text-muted d-block small">2021-09-30 11:00:20</span>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center py-2">
                                        <div className="avatar rounded no-thumbnail chart-text-color3"><i className="fa fa-globe" aria-hidden="true"></i></div>
                                        <div className="flex-fill ms-3">
                                            <div className="h6 mb-0">web</div>
                                            <small className="text-muted">Mumbai India</small>
                                        </div>
                                        <div className="flex-end">
                                            <span className="d-block text-end">122.170.109.21</span>
                                            <span className="text-muted d-block small">2021-09-29 10:56:22</span>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center py-2">
                                        <div className="avatar rounded no-thumbnail chart-text-color4"><i className="fa fa-globe" aria-hidden="true"></i></div>
                                        <div className="flex-fill ms-3">
                                            <div className="h6 mb-0">web</div>
                                            <small className="text-muted">Pune India</small>
                                        </div>
                                        <div className="flex-end">
                                            <span className="d-block text-end">198.182.109.22</span>
                                            <span className="text-muted d-block small">2021-09-30 12:50:52</span>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center py-2">
                                        <div className="avatar rounded no-thumbnail chart-text-color2"><i className="fa fa-globe" aria-hidden="true"></i></div>
                                        <div className="flex-fill ms-3">
                                            <div className="h6 mb-0">web</div>
                                            <small className="text-muted">Banglor India</small>
                                        </div>
                                        <div className="flex-end">
                                            <span className="d-block text-end">126.150.109.22</span>
                                            <span className="text-muted d-block small">2021-09-30 10:00:20</span>
                                        </div>
                                    </li>
                                </ul>
                            </Tab.Pane>
                            <Tab.Pane className="tab-pane fade  show" id="Devices" eventKey='second'>
                                <ul className="list-unstyled list mb-0">
                                    <li className="d-flex align-items-center py-2">
                                        <div className="avatar rounded no-thumbnail chart-text-color1"><i className="fa fa-chrome" aria-hidden="true"></i></div>
                                        <div className="flex-fill ms-3">
                                            <div className="h6 mb-0">Chrome V94.0.4606.61 (Windows)</div>
                                            <small className="text-muted">Mumbai India</small>
                                        </div>
                                        <div className="flex-end">
                                            <span className="d-block text-end">122.170.109.22</span>
                                            <span className="text-muted d-block small">2021-09-30 11:00:52</span>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center py-2">
                                        <div className="avatar rounded no-thumbnail chart-text-color2"><i className="fa fa-mobile" aria-hidden="true"></i></div>
                                        <div className="flex-fill ms-3">
                                            <div className="h6 mb-0">iPhone</div>
                                            <small className="text-muted">Mumbai India</small>
                                        </div>
                                        <div className="flex-end">
                                            <span className="d-block text-end">27.57.172.87</span>
                                            <span className="text-muted d-block small">2021-09-23 09:03:35</span>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center py-2">
                                        <div className="avatar rounded no-thumbnail chart-text-color3"><i className="fa fa-firefox" aria-hidden="true"></i></div>
                                        <div className="flex-fill ms-3">
                                            <div className="h6 mb-0">Mozila V92.0.4515.159 (Windows)</div>
                                            <small className="text-muted">Mumbai India</small>
                                        </div>
                                        <div className="flex-end">
                                            <span className="d-block text-end">117.99.104.150</span>
                                            <span className="text-muted d-block small">2021-08-19 08:01:44</span>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center py-2">
                                        <div className="avatar rounded no-thumbnail chart-text-color4"><i className="fa fa-mobile" aria-hidden="true"></i></div>
                                        <div className="flex-fill ms-3">
                                            <div className="h6 mb-0">Android</div>
                                            <small className="text-muted">Pune India</small>
                                        </div>
                                        <div className="flex-end">
                                            <span className="d-block text-end">118.99.104.150</span>
                                            <span className="text-muted d-block small">2021-09-30 12:50:52</span>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center py-2">
                                        <div className="avatar rounded no-thumbnail chart-text-color3"><i className="fa fa-safari" aria-hidden="true"></i></div>
                                        <div className="flex-fill ms-3">
                                            <div className="h6 mb-0">Safari V84.0.4515.159 (Mac)</div>
                                            <small className="text-muted">Banglor India</small>
                                        </div>
                                        <div className="flex-end">
                                            <span className="d-block text-end">177.192.104.150</span>
                                            <span className="text-muted d-block small">2021-08-19 07:01:44</span>
                                        </div>
                                    </li>
                                </ul>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </Tab.Container>
            </div>
        </div>
    )
}

export default LoginActivity;