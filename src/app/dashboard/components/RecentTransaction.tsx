'use client'

import React from 'react';
import { RecentTransactionData } from '../api/RecentTransactionData';
import DataTable from 'react-data-table-component';


function RecentTransaction() {
    return (
        <div className="row g-3 mb-3 row-deck">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-header py-3 d-flex justify-content-between">
                        <h6 className="mb-0 fw-bold">Recent Transactions</h6>
                    </div>
                    <div className="card-body">
                        <div id="ordertabthree_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                            <div className="" style={{ display: 'flex', flexWrap: 'wrap' }} >
                                <div className="col-sm-12 col-md-6 mb-2 " style={{ display: 'flex',alignItems: 'center' }}>
                                    <div id="myDataTable_filter" className="dataTables_filter">
                                        <label className='d-flex align-items-center'>Search:<div className='mx-1'><input type="search" className="form-control" /></div></label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <DataTable
                                        title={RecentTransactionData.title}
                                        columns={RecentTransactionData.columns}
                                        data={RecentTransactionData.rows}
                                        defaultSortField="title"
                                        selectableRows={false}
                                        highlightOnHover={true}
                                    />
                                </div>
                            </div>
                            <div className="row mt-3 ">
                                <div className="col-sm-12 col-md-5" style={{ float: 'left' }}>
                                    <div className="dataTables_info" id="myDataTable_info" role="status" aria-live="polite">Showing 1 to 7 of 7 entries</div>
                                </div>
                                <div className="col-sm-12 col-md-7 " >
                                    <div className="dataTables_paginate paging_simple_numbers" id="myDataTable_paginate" style={{ float: 'right' }}>
                                        <ul className="pagination">
                                            <li className="paginate_button page-item previous disabled" id="myDataTable_previous"><a href="#!" className="page-link">Previous</a></li>
                                            <li className="paginate_button page-item active"><a href="#!" className="page-link">1</a></li>
                                            <li className="paginate_button page-item next disabled" id="myDataTable_next"><a href="#!" className="page-link">Next</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RecentTransaction