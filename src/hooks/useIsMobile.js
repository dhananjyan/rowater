"use client"

import useWindowSize from "./useWindowSize";

const useIsMobile = () => {
    const windowSize = useWindowSize();
    const isMobile = windowSize.width < 720;

    return isMobile;
};

export default useIsMobile;