"use client";

import styles from "../page.module.scss";

import ArrowIcon from "../svgs/arrowIcon.svg";
import ArrowIconActive from "../svgs/arrowIconActive";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { DetailedHTMLProps, HTMLAttributes, JSXElementConstructor, LegacyRef, ReactElement, useEffect, useRef, useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

interface mediaPost {
    url: string;
    img: string;
    header: string;
    body: string;
}

export default function PublicationsInMedia() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [packedPosts, setPackedPosts] = useState<ReactElement<any, string | JSXElementConstructor<any>>[]>([]);
    const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);
    const [packedPostsPositions, setPackedPostsPositions] = useState<number[]>([]);

    const testPosts: Array<mediaPost> = [
        {url: "#", img: "/publicationsImages/publ1.jpeg", header: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus orci, fringilla nec congue sit amet, volutpat ac dui. Etiam metus quam, luctus non lobortis ut, malesuada a ris."},
        {url: "#", img: "/publicationsImages/publ2.jpeg", header: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus orci, fringilla nec congue sit amet, volutpat ac dui. Etiam metus quam, luctus non lobortis ut, malesuada a ris."},
        {url: "#", img: "/publicationsImages/publ3.jpeg", header: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus orci, fringilla nec congue sit amet, volutpat ac dui. Etiam metus quam, luctus non lobortis ut, malesuada a ris."},
        {url: "#", img: "/publicationsImages/publ1.jpeg", header: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus orci, fringilla nec congue sit amet, volutpat ac dui. Etiam metus quam, luctus non lobortis ut, malesuada a ris."},
        {url: "#", img: "/publicationsImages/publ2.jpeg", header: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus orci, fringilla nec congue sit amet, volutpat ac dui. Etiam metus quam, luctus non lobortis ut, malesuada a ris."},
        {url: "#", img: "/publicationsImages/publ3.jpeg", header: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus orci, fringilla nec congue sit amet, volutpat ac dui. Etiam metus quam, luctus non lobortis ut, malesuada a ris."},
        {url: "#", img: "/publicationsImages/publ1.jpeg", header: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus orci, fringilla nec congue sit amet, volutpat ac dui. Etiam metus quam, luctus non lobortis ut, malesuada a ris."},
        {url: "#", img: "/publicationsImages/publ1.jpeg", header: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus orci, fringilla nec congue sit amet, volutpat ac dui. Etiam metus quam, luctus non lobortis ut, malesuada a ris."},
        {url: "#", img: "/publicationsImages/publ2.jpeg", header: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus orci, fringilla nec congue sit amet, volutpat ac dui. Etiam metus quam, luctus non lobortis ut, malesuada a ris."},
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
            
            let classForPack = "seventh-section-list-media-publications-box";

            if (firstIteration && postsCopy.length != 0) {
                classForPack += "-start"
            } else if (postsCopy.length == 0 && !firstIteration) {
                classForPack += "-end"
            }
            
            packedPostsLocal[packedPostsLocal.length] = 
                <div className={styles[classForPack]}>
                    {chosenPosts.map((val, i) => // <div href={val.url} />
                        <Link className={styles["seventh-section-list-media-publication"]} href={val.url} key={i}>
                            <Image className={styles["seventh-section-list-media-publication-image"]} src={val.img} alt="Publication image" />
                            <h2 className={styles["font-27-px"]}>
                                {val.header}
                            </h2>
                            <p>
                                {val.body}
                            </p>
                        </Link>
                    )}
                </div>

            firstIteration = false;
        }

        return packedPostsLocal;
    }

    function getPackedPostsPositions(packedPostsLocal: Array<React.ReactElement>) {
        const packedPostsPosition: Array<number> = [0];

        for (let index = 0; index < packedPostsLocal.length - 1; index++) {
            if (index > packedPostsLocal.length - 2) {
                //  fake data for population
                packedPostsPosition[packedPostsPosition.length] = -1;
            } else if (index == 0) {
                packedPostsPosition[packedPostsPosition.length] = 
                    (window.innerWidth / 100) 
                    * 
                    (100 - 6 /*windowWidth - left*/) 
                    + 
                    packedPostsPosition[packedPostsPosition.length - 1];
            } else {
                packedPostsPosition[packedPostsPosition.length] = 
                    (window.innerWidth / 100) 
                    * 
                    (100 - 10 /*windowWidth - left*/) 
                    + 
                    packedPostsPosition[packedPostsPosition.length - 1];
            }
        }

        return packedPostsPosition;
    }

    useEffect(() => {
        const packedPostsLocal = packPosts(testPosts, 3);

        setPackedPosts(packedPostsLocal);

        const packedPostsPossCopy = getPackedPostsPositions(packedPostsLocal);

        const scrollWidth = scrollRef.current?.scrollWidth;
        const clientWidth = scrollRef.current?.clientWidth;
        
        if (scrollWidth && clientWidth) {
            packedPostsPossCopy[packedPostsPossCopy.length - 1] = scrollWidth - clientWidth;
        } else {
            packedPostsPossCopy[packedPostsPossCopy.length - 1] = 0
        }

        setPackedPostsPositions(packedPostsPossCopy);
    }, [testPosts]);

    function changeCurrentScrollPositionIndex(index: number) {
        scrollRef.current?.scrollTo({left: packedPostsPositions[index], behavior: "smooth"});
    }

    function handleScroll() {
        const currentScroll = scrollRef.current?.scrollLeft ? scrollRef.current?.scrollLeft : 0;

        console.log(currentScroll);
        console.log(packedPostsPositions);
        const currentwio: any = scrollRef.current?.scrollWidth;
        const jfkd: any = scrollRef.current?.clientWidth;
        console.log("max" + (currentwio - jfkd));

        for (let index = 0; index < packedPostsPositions.length - 1; index++) {
            const element = Math.round(packedPostsPositions[index]);
            const nextElement = Math.round(packedPostsPositions[index + 1]);
            const roundedCurrentScroll = Math.round(currentScroll);

            console.log("el" + element);
            if (element <= roundedCurrentScroll && nextElement > roundedCurrentScroll) {
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