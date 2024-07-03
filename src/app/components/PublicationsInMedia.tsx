"use client";

import styles from "../page.module.scss";

import { DetailedHTMLProps, HTMLAttributes, JSXElementConstructor, LegacyRef, ReactElement, useEffect, useRef, useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

import ArrowIcon from "../svgs/arrowIcon.svg";
import ArrowIconActive from "../svgs/arrowIconActive";
import Link from "next/link";

interface mediaPost {
    url: string;
    imgSrc: string;
    header: string;
    body: string;
}

export default function PublicationsInMedia() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scroolPosition, setScrollPosition] = useState(0);
    const [packedPosts, setPackedPosts] = useState<ReactElement<any, string | JSXElementConstructor<any>>[]>([]);
    const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);
    const [packedPostsPositions, setPackedPostsPositions] = useState<number[]>([]);

    const testPosts: Array<mediaPost> = [
        {url: "#", imgSrc: "...", header: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus orci, fringilla nec congue sit amet, volutpat ac dui. Etiam metus quam, luctus non lobortis ut, malesuada a ris."},
        {url: "#", imgSrc: "...", header: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus orci, fringilla nec congue sit amet, volutpat ac dui. Etiam metus quam, luctus non lobortis ut, malesuada a ris."},
        {url: "#", imgSrc: "...", header: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus orci, fringilla nec congue sit amet, volutpat ac dui. Etiam metus quam, luctus non lobortis ut, malesuada a ris."},
        {url: "#", imgSrc: "...", header: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus orci, fringilla nec congue sit amet, volutpat ac dui. Etiam metus quam, luctus non lobortis ut, malesuada a ris."},
        {url: "#", imgSrc: "...", header: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus orci, fringilla nec congue sit amet, volutpat ac dui. Etiam metus quam, luctus non lobortis ut, malesuada a ris."},
        {url: "#", imgSrc: "...", header: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus orci, fringilla nec congue sit amet, volutpat ac dui. Etiam metus quam, luctus non lobortis ut, malesuada a ris."},
        {url: "#", imgSrc: "...", header: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus orci, fringilla nec congue sit amet, volutpat ac dui. Etiam metus quam, luctus non lobortis ut, malesuada a ris."},
        {url: "#", imgSrc: "...", header: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus orci, fringilla nec congue sit amet, volutpat ac dui. Etiam metus quam, luctus non lobortis ut, malesuada a ris."},
    ];

    function packPosts(posts: Array<mediaPost>, postsInOnePack: number) {
        const packedPostsLocal: Array<React.ReactElement> = [];
        const packedPostsPosition: Array<number> = [0];

        let postsCopy = posts;

        let postsCopyIsEmpty = postsCopy.length == 0;

        let firstIteration = true;

        while (!postsCopyIsEmpty) {
            const chosenPosts = postsCopy.splice(0, postsInOnePack);
            postsCopyIsEmpty = postsCopy.length == 0
            

            if (firstIteration) {
                packedPostsLocal[packedPostsLocal.length] = 
                    <div className={styles["seventh-section-list-media-publications-box-start"]}>
                        {chosenPosts.map((val, i) => // <div href={val.url} />
                            <div key={i} className={styles["seventh-section-list-media-publication"]}>
                                <img src={val.imgSrc} className={styles["seventh-section-list-media-publication-image"]} />
                                <h2 className={styles["font-27-px"]}>
                                    {val.header}
                                </h2>
                                <p>
                                    {val.body}
                                </p>
                            </div>
                        )}
                    </div>

                firstIteration = false;
            } else if (postsCopy.length == 0) {
                packedPostsLocal[packedPostsLocal.length] = 
                    <div className={styles["seventh-section-list-media-publications-box-end"]}>
                        {chosenPosts.map((val, i) =>
                            <div key={i} className={styles["seventh-section-list-media-publication"]}>
                                <img src={val.imgSrc} className={styles["seventh-section-list-media-publication-image"]} />
                                <h2 className={styles["font-27-px"]}>
                                    {val.header}
                                </h2>
                                <p>
                                    {val.body}
                                </p>
                            </div>
                        )}
                    </div>
            } else {
                packedPostsLocal[packedPostsLocal.length] = 
                    <div className={styles["seventh-section-list-media-publications-box"]}>
                        {chosenPosts.map((val, i) =>
                        <div key={i} className={styles["seventh-section-list-media-publication"]}>
                            <img src={val.imgSrc} className={styles["seventh-section-list-media-publication-image"]} />
                            <h2 className={styles["font-27-px"]}>
                                {val.header}
                            </h2>
                            <p>
                                {val.body}
                            </p>
                        </div>
                        )}
                    </div>
            }
        }

        return packedPostsLocal;
    }

    function getPackedPostsPositions(packedPostsLocal: Array<React.ReactElement>) {
        const packedPostsPosition: Array<number> = [0];

        for (let index = 0; index < packedPostsLocal.length - 1; index++) {
            if (index > packedPostsLocal.length - 2) {
                packedPostsPosition[packedPostsPosition.length] = 
                    scrollRef.current?.scrollWidth 
                    ? 
                    scrollRef.current?.scrollWidth 
                    : 
                    0;
            } else {
                packedPostsPosition[packedPostsPosition.length] = 
                    (window.innerWidth / 100) 
                    * 
                    (100 - 6 /*windowWidth - left*/) 
                    + 
                    packedPostsPosition[packedPostsPosition.length - 1];
            }
        }

        return packedPostsPosition;
    }

    useEffect(() => {
        const packedPostsLocal = packPosts(testPosts, 3);

        setPackedPosts(packedPostsLocal);
        setPackedPostsPositions(getPackedPostsPositions(packedPostsLocal))
    }, [testPosts]);

    function changeCurrentScrollPositionIndex(index: number) {
        scrollRef.current?.scrollTo({left: packedPostsPositions[index], behavior: "smooth"});
    }

    function handleScroll() {
        const currentScroll = scrollRef.current?.scrollLeft ? scrollRef.current?.scrollLeft : 0;

        setScrollPosition(
            currentScroll
        );

        for (let index = 0; index < packedPostsPositions.length - 1; index++) {
            const element = packedPostsPositions[index];
            console.log(currentScroll);
            console.log(element);
            console.log(packedPostsPositions[index + 1]);
            console.log(element <= currentScroll);
            console.log(currentScroll)
            if (element <= currentScroll && packedPostsPositions[index + 1] - 1 > currentScroll) {
                setCurrentTabIndex(index);

                return;
            }
        }
        setCurrentTabIndex(packedPostsPositions.length - 1);
    }

    return (
        <>
            <div className={styles["seventh-section-scroll-box"]} onScroll={handleScroll} ref={scrollRef}>
                {packedPosts}
            </div>
            <div className={styles["seventh-section-controls-box"]}>
                <div className={styles["seventh-section-tabs-box"]}>
                    {packedPostsPositions.map((el, i) => 
                        <div onClick={() => changeCurrentScrollPositionIndex(i)} key={i} className={styles[`seventh-section-tab${currentTabIndex == i ? "-active" : ""}`]}></div>
                    )}
                </div>
                <div className={styles["seventh-section-arrows-box"]}>
                    {currentTabIndex == 0 
                    ?
                    <div><ArrowIcon className="h-100" /></div>
                    :
                    <div onClick={() => changeCurrentScrollPositionIndex(currentTabIndex - 1)}><ArrowIconActive className="h-100" /></div>
                    }
                    {currentTabIndex == packedPostsPositions.length - 1
                    ?
                    <div><ArrowIcon className={styles["seventh-section-arrow-180-rotate"] + " h-100"} /></div>
                    :
                    <div onClick={() => changeCurrentScrollPositionIndex(currentTabIndex + 1)}><ArrowIconActive className={styles["seventh-section-arrow-180-rotate"]  + " h-100"} /></div>
                    }
                </div>
            </div>
        </>
    )
}