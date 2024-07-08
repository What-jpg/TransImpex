"use client";

import HeaderIcon from "../svgs/headerIcon.svg";
import Cross from "../svgs/cross.svg";
import BurgerMenu from "../svgs/burgerMenu.svg";

import { useEffect, useRef, useState } from "react";

export default function HeaderComponent() {
    const [burgerMenuOpened, setBurgerMenuOpened] = useState(false);

    return (
        <header>
            <div className={"header-content"}>
                <div className={"header-links-section header-links-section-end-position-addition"}>
                    <div className={"header-links-section-block-for-end-position"}></div>
                    <a>Overview</a>
                    <a>Services</a>
                    <a>Contacts</a>
                </div>
                <HeaderIcon className={"header-icon"} />
                <div className={"header-links-section"}>
                    <a>Employment</a>
                    <a>Blog</a>
                    <a>Support us</a>
                    <div className={"header-language"}>
                        UA
                    </div>
                </div>
            </div>
            <div className={"burger-menu"}>
                <div className={"burger-menu-main-header"}>
                <HeaderIcon className={"header-icon"} />
                    <div className={"burger-menu-menu-button-container"}>
                        <div className={"header-language"}>
                            UA
                        </div>
                        {
                            burgerMenuOpened 
                            ?
                                <div className="menu-cross-button" aria-hidden="true" onClick={() => setBurgerMenuOpened(false)}>
                                    <Cross />
                                </div>
                            :
                            <div className={"menu-button"} onClick={() => setBurgerMenuOpened(true)}>
                                <BurgerMenu />
                            </div>
                        }
                    </div>
                </div>
                {
                    burgerMenuOpened 
                    ?
                    <div className="burger-menu-list">
                        <a>Overview</a>
                        <hr className="burger-menu-list-hr" />
                        <a>Services</a>
                        <hr className="burger-menu-list-hr" />
                        <a>Contacts</a>
                        <hr className="burger-menu-list-hr" />
                        <a>Employment</a>
                        <hr className="burger-menu-list-hr" />
                        <a>Blog</a>
                        <hr className="burger-menu-list-hr" />
                        <a>Support us</a>
                    </div>
                    :
                    null
                }
            </div>
        </header>
    )
}