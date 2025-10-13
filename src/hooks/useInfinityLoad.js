import { useEffect, useRef } from "react";

function useInfinityLoad({ bottomOffset = 0, onEnd = () => {} } = {}) {
    const isEnded = useRef(false);

    useEffect(() => {
        const handle = () => {
            const isScrollEnd =
                document.documentElement.scrollHeight +
                bottomOffset -
                (window.innerHeight + window.scrollY);

            if (!isEnded.current && isScrollEnd <= 1) {
                isEnded.current = true;
                onEnd();
            } else if (isScrollEnd > 1) {
                isEnded.current = false;
            }
        };

        window.addEventListener("scroll", handle);
        return () => window.removeEventListener("scroll", handle);
    }, [bottomOffset, onEnd]);
}

export default useInfinityLoad;
