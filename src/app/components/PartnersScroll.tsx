"use client";

import styles from "../scss/page.module.scss";

import { JSXElementConstructor, ReactElement, useEffect, useRef, useState } from "react";
import TestPartner from "../svgs/testPartner.svg";
import TestPartner2 from "../svgs/testPartner2.svg";
import Image from "next/image";

export default function PartnersScroll() {
    const [currentPosition, setCurrentPosition] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const currentScrollRef = scrollRef.current;

    const testPartnersImgSrcs = [
        "/partners/testPartner.svg",
        "/partners/testPartner2.svg"
    ];

    function mapPartners(partnersImgs: Array<string>) {
        return partnersImgs.map((val, i) => 
            <div className={styles["sixth-section-partners-list-svg-overflow-from-screen-child"]} key={i}><Image src={val} alt="Partner icon" /></div>
        );
    }

    function doublePartners(partners: ReactElement<any, string | JSXElementConstructor<any>>[]) {
        return [partners, partners];
    }

    function startScrollingAnimation(startingPosition: number) {
        const currentScrollRefLocal = scrollRef.current;

        if (currentScrollRefLocal) {
            const currentScrollWidth = currentScrollRefLocal.scrollWidth;
            const currentScrollWidthHalfNegative = currentScrollRefLocal.scrollWidth / -2;

            const pixelsRightPerFrame = 1;

            let newScrollPosition = startingPosition + pixelsRightPerFrame;

            if (currentScrollRefLocal.offsetLeft >= 0) {
                newScrollPosition = currentScrollWidthHalfNegative + pixelsRightPerFrame;
            }

            setCurrentPosition(newScrollPosition)

            requestAnimationFrame(() => startScrollingAnimation(newScrollPosition));
        }
    }
    useEffect(() => {
        startScrollingAnimation(currentPosition);
    }, [currentScrollRef]);

    return (
        <div className={styles["sixth-section-partners-list"]}>
            <div style={{left: currentPosition}} ref={scrollRef} className={styles["sixth-section-partners-list-svg-overflow-from-screen"]}>
                {
                    doublePartners(mapPartners(testPartnersImgSrcs))
                }
            </div>
            <div className={styles["sixth-section-partners-list-fade-effect"]}></div>
        </div>
    )
}