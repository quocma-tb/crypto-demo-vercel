'use client'

import React, { useState } from 'react';
import menuData from '@/core/components/menu/Menu.json';
import Link from 'next/link';

function Sidebar(props) {
    const [isSidebarMini, setIsSidebarMini] = useState<boolean>(false);
    const baseUrl = process.env.PUBLIC_URL;

    const openChildren = (id) => {
        var otherTabs = document.getElementsByClassName("has-children")
        if (otherTabs) {
            for (var i = 0; i < otherTabs.length; i++) {
                if (otherTabs[i].id !== id) {
                    otherTabs[i].className = otherTabs[i].className.replace(" show", "");
                    if (otherTabs[i].parentElement.children.length > 1) {
                        otherTabs[i].parentElement.children[0].setAttribute("aria-expanded", "false")
                    }
                }
            }
        }
        const menutab = document.getElementById(id)
        if (menutab) {
            if (menutab.classList.contains("show")) {
                menutab.classList.remove("show")
                if (menutab.parentElement.children.length > 1) {
                    menutab.parentElement.children[0].setAttribute("aria-expanded", "false")
                }
            } else {
                menutab.classList.add("show")
                if (menutab.parentElement.children.length > 1) {
                    menutab.parentElement.children[0].setAttribute("aria-expanded", "true")
                }
            }
        }
    }
    const openChildren1 = (id) => {
        var otherTabs = document.getElementsByClassName("has-children")
        if (otherTabs) {
            for (var i = 0; i < otherTabs.length; i++) {
                otherTabs[i].className = otherTabs[i].className.replace(" show", "");
            }
        }
        const menutab = document.getElementById(id)
        if (menutab) {
            menutab.classList.add("show")
            if (menutab.parentElement.children.length > 1) {
                menutab.parentElement.children[0].setAttribute("aria-expanded", "true")
            }
        }
    }

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
                        if (d.children.length === 0) {
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

                        }
                        return <li key={"shsdg" + i} className=" collapsed">

                            <Link href="#!" className={`m-link ${d.children.filter((d) => baseUrl + "/" + d.routerLink[0] === activekey).length > 0 ? "active" : ""}`} href="#!" onClick={(e) => { e.preventDefault(); openChildren("menu-Pages" + i) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox={d.viewBox}>
                                    <path xmlns="http://www.w3.org/2000/svg" d={d.iconClasss} style={{ fill: 'var(--primary-color)' }} data-st="fill:var(--chart-color4);"></path>
                                    <path xmlns="http://www.w3.org/2000/svg" className="st0" d={d.iconClass}></path>
                                </svg>
                                <div>
                                    <h6 className='mb-0'>{d.name}</h6>
                                    <small className="text-muted">{d.subject}</small>
                                </div>
                                <span className="arrow icofont-dotted-down ms-auto text-end fs-5">
                                </span>

                            </Link>

                            {
                                d.children.length > 0 ?
                                    <ul className="sub-menu collapse has-children" id={"menu-Pages" + i}>
                                        {d.children.map((data, ind) => {

                                            if (d.children.length > 0) {
                                                if (activekey === "/" + data.routerLink[0]) {
                                                    setTimeout(() => {
                                                        openChildren1("menu-Pages" + i)
                                                    }, 500);
                                                }

                                            }
                                            return <li key={"jfdgj" + ind}>
                                                <Link className={activekey === "/" + data?.routerLink[0] ? "ms-link active" : "ms-link"} href={baseUrl + "/" + data.routerLink[0]}>
                                                    <span>{data?.name}</span>
                                                </Link>
                                            </li>
                                        })}
                                    </ul>
                                    : null
                            }
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