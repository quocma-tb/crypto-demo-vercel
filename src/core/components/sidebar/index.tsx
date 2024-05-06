'use client'

import React, { useState } from 'react';
import menuData from '@/core/components/menu/Menu.json';
import Link from 'next/link';

function Sidebar(props) {
    const [isSidebarMini, setIsSidebarMini] = useState<boolean>(false);

    const { activekey } = props;


    return (<div id="mainsidemenu" className={`sidebar py-2 py-md-2 me-0 border-end ${isSidebarMini ? "sidebar-mini" : ""}`}>
        <div className="d-flex flex-column h-100">
            <a href={process.env.PUBLIC_URL + "/"} className="mb-0 brand-icon" >
                <span className="logo-icon">
                    <i className="fa fa-gg-circle fs-3"></i>
                </span>
                <span className="logo-text"  >Cryptoon</span>
            </a>
            <ul className="menu-list flex-grow-1 mt-4 px-1">

                {
                    menuData.menu.map((d, i) => {
                        return <li key={"dsfshsdg" + i} className=" collapsed">
                            <Link href={"/" + d.routerLink[0]} className={`m-link ${("/" + d.routerLink[0] === activekey) ? "active" : ""}`} >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox={d.viewBox}>
                                    <path xmlns="http://www.w3.org/2000/svg" d={d.iconClasss} style={{ fill: 'var(--primary-color)' }} data-st="fill:var(--chart-color4);"></path>
                                    <path xmlns="http://www.w3.org/2000/svg" className="st0" d={d.iconClass}></path>
                                </svg>
                                <div>
                                    <h6 className='mb-0'>{d.name}</h6>
                                    <small className="text-muted">{d.subject}</small>
                                </div>
                            </Link>
                        </li>
                    })
                }
            </ul>
            <button type="button" className="btn btn-link sidebar-mini-btn text-muted" onClick={() => { setIsSidebarMini(!isSidebarMini) }}>
                <span className="ms-2"><i className="icofont-bubble-right"></i></span>
            </button>
        </div>
    </div>
    )
}

export default Sidebar;