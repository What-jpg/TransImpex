"use client";

import styles from "../scss/page.module.scss";

import { JSXElementConstructor, ReactElement, useEffect, useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import Image, { StaticImageData } from "next/image";
import useInnerWidth from "../hooks/useInnerWidth";

interface certificate {
    img: string;
}

export default function CertificatesCarousel() {
    const [index, setIndex] = useState(0);
    const [packedCertificates, setPackedCertificates] = useState<ReactElement<any, string | JSXElementConstructor<any>>[]>([]);
    const width = useInnerWidth();

    const testCertificates: Array<certificate> = [
        {img: "/certificates/cert1.jpeg"},
        {img: "/certificates/cert1.jpeg"},
        {img: "/certificates/cert1.jpeg"},
        {img: "/certificates/cert1.jpeg"},
        {img: "/certificates/cert1.jpeg"},
        {img: "/certificates/cert1.jpeg"},
        {img: "/certificates/cert1.jpeg"},
        {img: "/certificates/cert1.jpeg"},
    ];

    function packCertificates(certs: Array<certificate>, certsInOnePack: number) {
        const packedCerts: Array<React.ReactElement> = [];

        const certWidth = 81 / certsInOnePack; /* totalWidthForOnePack / certsInOnePack */
        const certHeight = certWidth * 1.39472;

        let certsCopy = certs;

        let certsCopyIsEmpty = certsCopy.length == 0;

        while (!certsCopyIsEmpty) {
            const chosenCerts = certsCopy.splice(0, certsInOnePack);

            packedCerts[packedCerts.length] = 
                <CarouselItem>
                    <div className={styles["third-section-certificates-box"]}>
                        {
                            chosenCerts.map((val, i) =>
                                <div style={{width: `${certWidth}vw`, paddingTop: `${certHeight}vw`}} className={styles["third-section-certificate-box"]} key={i}><Image src={val.img} alt="certificate" /></div>
                            )
                        }
                    </div>
                </CarouselItem>

            certsCopyIsEmpty = certsCopy.length == 0
        }

        return packedCerts;
    }

    useEffect(() => {
        let inOnePack = 3
        if (width <= 768)
            inOnePack = 2;

        setPackedCertificates(packCertificates(testCertificates, inOnePack));
    }, [testCertificates, width]);

    useEffect(() => {
        if (packedCertificates.length <= index) {
            setIndex(0);
        }
    }, [packedCertificates]);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    }

    return (
        <div className={styles["third-section-carousel-box"]}>
            <Carousel className={styles["third-section-carousel"]} controls={false} indicators={false} activeIndex={index} onSelect={handleSelect}>
                {packedCertificates}
            </Carousel>
            <div className={styles["third-section-certificates-tabs-box"]}>
                {
                    packedCertificates.map((el, i) => {
                        return <div 
                            key={i}
                            onClick={() => setIndex(i)}
                            className={styles[`third-section-certificates-tab${i == index ? "-active" : ""}`]}
                        ></div>
                    })
                }
            </div>
        </div>
    )
}