"use client";

import { useEffect, useState } from "react";

export default function useInnerWidth() {
    const [width, setWidth] = useState(1000);

    const handleWidthChange = () => setWidth(window.innerWidth);

    useEffect(() => {
        handleWidthChange();

        window.addEventListener("resize", handleWidthChange);

        return () => window.removeEventListener("resize", handleWidthChange);
    }, []);

    return width
}