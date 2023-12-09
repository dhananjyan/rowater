"use client"

import { useEffect, useState } from "react";

const useScrollPosition = (id) => {
    console.log("id", id)
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        let target = id ? document.getElementById(id) : window
        const handleScroll = () => {
            const position = target?.scrollTop;
            console.log("scrolling", position)
            setScrollPosition(position);
        };

        target?.addEventListener('scroll', handleScroll);
        return () => {
            target?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollPosition;
};

export default useScrollPosition;
