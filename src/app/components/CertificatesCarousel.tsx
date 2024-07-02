"use client";

import styles from "../page.module.scss";

import { JSXElementConstructor, ReactElement, useEffect, useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

interface certificate {
    path: string;
}

export default function CertificatesCarousel() {
    const [index, setIndex] = useState(0);
    const [packedCertificates, setPackedCertificates] = useState<ReactElement<any, string | JSXElementConstructor<any>>[]>([]);

    const testCertificates: Array<certificate> = [
        {path: "..."},
        {path: "..."},
        {path: "..."},
        {path: "..."},
        {path: "..."},
        {path: "..."},
        {path: "..."},
        {path: "..."},
    ];

    function packCertificates(certs: Array<certificate>, certsInOnePack: number) {
        const packedCerts: Array<React.ReactElement> = [];

        let certsCopy = certs;

        let certsCopyIsEmpty = certsCopy.length == 0;

        while (!certsCopyIsEmpty) {
            const chosenCerts = certsCopy.splice(0, certsInOnePack);

            packedCerts[packedCerts.length] = 
            <div className={styles["third-section-certificates-box"]}>
                {
                    chosenCerts.map((val, i) =>
                        <img key={i} src={val.path} className={styles["third-section-certificate"]} />
                    )
                }
            </div>

            certsCopyIsEmpty = certsCopy.length == 0
        }

        return packedCerts;
    }

    useEffect(() => {
        setPackedCertificates(packCertificates(testCertificates, 3));
    }, [testCertificates]);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    }

    return (
        <div className={styles["third-section-caurosel-box"]}>
            <Carousel className={styles["third-section-caurosel"]} controls={false} indicators={false} activeIndex={index} onSelect={handleSelect}>
                {packedCertificates.map((el, i) => {
                    return <CarouselItem key={i}>
                        {el}
                    </CarouselItem>
                })}
            </Carousel>
            <div className={styles["third-section-certificates-tabs-box"]}>
                {
                    packedCertificates.map((el, i) => {
                        return <div 
                            key={i}
                            onClick={() => setIndex(i)}
                            className={styles[`third-section-certificates-tab${i == index ? "" : "-empty"}`]}
                        ></div>
                    })
                }
            </div>
        </div>
    )
}