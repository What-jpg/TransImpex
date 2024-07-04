"use client";

import styles from "../page.module.scss";

import { JSXElementConstructor, ReactElement, useEffect, useRef, useState } from "react";
import TestPartner from "../svgs/testPartner.svg";
import TestPartner2 from "../svgs/testPartner2.svg";

export default function PartnersScroll() {
    const [currentPosition, setCurrentPosition] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const currentScrollRef = scrollRef.current;

    function doublePartnersAndAddClass(partners: ReactElement<any, string | JSXElementConstructor<any>>[]) {
        const partnersWithAddedClass = partners.map((val, i) => {
            val.props.className += ` ${styles["sixth-section-partners-list-svg-overflow-from-screen-child"]}`;
            return val
        })
        return [partnersWithAddedClass, partnersWithAddedClass];
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
                    doublePartnersAndAddClass([<TestPartner key='0' />, <TestPartner2 key='1' />])
                }
            </div>
            <div className={styles["sixth-section-partners-list-fade-effect"]}></div>
        </div>
    )
}