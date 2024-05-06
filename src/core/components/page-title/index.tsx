'use client'

import { Modal } from "react-bootstrap";
import React, { ReactNode, useState } from "react";
import { Tab, Nav } from 'react-bootstrap';

type PageTitleProps = {
    pagetitle: string;
    downloadbutton?: ReactNode;
    reportbutton?: ReactNode;
    sidebutton?: ReactNode;
    p2pheader?:ReactNode;
    Calendermodal?:boolean;
    reward?:boolean;
}

function PageTitle(props:PageTitleProps) {
    const [rewardModel, setRewardModel] = useState(false);
    const [caleModel, setCaleModel] = useState(false);
    const { pagetitle, downloadbutton, reportbutton, sidebutton, p2pheader, Calendermodal, reward } = props;
    return (
        <div className="container-xxl">
            <div className="row align-items-center g-2">
                <div className="col">
                    <h1 className="h4 mt-1">{pagetitle}</h1>
                </div>
                {
                    p2pheader ? <div className="col-12 col-md-6 text-md-end">
                        <Nav className="nav nav-tabs tab-body-header rounded d-inline-flex" role="tablist">
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link buy" eventKey='first' data-bs-toggle="tab" href="#Buy" role="tab" aria-selected="true">Buy</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link className="nav-link sell" eventKey='second' data-bs-toggle="tab" href="#Sell" role="tab" aria-selected="false">Sell</Nav.Link></Nav.Item>
                        </Nav>
                    </div> : null
                }
                {
                    sidebutton ? null :
                        <div className="col-12 col-md-6 text-md-end">
                            <a href="https://themeforest.net/user/pixelwibes" title="Download" className="btn btn-white border lift me-1">{downloadbutton}</a>
                            <button type="button" className="btn btn-dark lift">{reportbutton}</button>
                        </div>
                }
                {
                    Calendermodal ? <div className="col-auto">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addevent" onClick={() => { setCaleModel(true) }}><i className="icofont-plus-circle me-2 fs-6"></i>Add Event</button>
                    </div> : null
                }
                {
                    reward ?
                        <div className="col-auto">
                            <button type="button" className="btn btn-dark lift" data-bs-toggle="modal" data-bs-target="#VoucherModal" onClick={() => { setRewardModel(true) }}>Enter Voucher Code</button>
                        </div>
                    : null

                }

            </div>
            <Modal className="modal" id="VoucherModal" show={rewardModel} onHide={()=>{setRewardModel(false)}} style={{display: "block"}}>
                <div className="modal-content">
                    <Modal.Header className="modal-header" closeButton>
                        <h5 className="modal-title">Voucher Redeem</h5>
                    </Modal.Header>
                    <Modal.Body className="modal-body">
                        <form>
                            <label className="form-label">Enter the Code</label>
                            <input type="text" className="form-control" />
                        </form>
                        <p className="text-muted my-3">Each code can be only redeemed once per user. Once redeemed, the reward cannot be reversed.</p>
                    </Modal.Body>
                    <Modal.Footer className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>{setRewardModel(false)}}>Close</button>
                        <button type="button" className="btn btn-primary">Redeem</button>
                    </Modal.Footer>
                </div>
            </Modal>
            <Modal className="modal" id="addevent" show={caleModel} onHide={() => {setCaleModel(false)}} style={{display: "block"}}>
                <Modal.Header className="modal-header" closeButton>
                    <h5 className="modal-title  fw-bold" id="eventaddLabel">Add Event</h5>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput99" className="form-label">Event Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput99" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFileMultipleone" className="form-label">Event Images</label>
                        <input className="form-control" type="file" id="formFileMultipleone" />
                    </div>
                    <div className="deadline-form">
                        <form>
                            <div className="row g-3 mb-3">
                                <div className="col">
                                    <label htmlFor="datepickerded" className="form-label">Event Start Date</label>
                                    <input type="date" className="form-control w-100" id="datepickerded" />
                                </div>
                                <div className="col">
                                    <label htmlFor="datepickerdedone" className="form-label">Event End Date</label>
                                    <input type="date" className="form-control w-100" id="datepickerdedone" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea78" className="form-label">Event Description (optional)</label>
                        <textarea className="form-control" id="exampleFormControlTextarea78" rows={3} placeholder="Add any extra details about the request"></textarea>
                    </div>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => { this.setState({ ismodal: false }) }} data-bs-dismiss="modal">Done</button>
                    <button type="button" className="btn btn-primary">Create</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default PageTitle;