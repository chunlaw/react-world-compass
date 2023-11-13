import { useEffect, useMemo, useRef, useState } from "react";
import throttle from "lodash.throttle";
const useCompass = (interval = 20) => {
    const absolute = useRef(false);
    const [alpha, setAlpha] = useState(null);
    const updateAlpha = useMemo(() => throttle((alpha) => {
        setAlpha(alpha);
    }, Math.max(5, interval)), []);
    useEffect(() => {
        const el = (e) => {
            var _a;
            if (e.absolute)
                absolute.current = true;
            // @ts-ignore
            if (typeof e.webkitCompassHeading !== "undefined") {
                // @ts-ignore
                updateAlpha((_a = e.webkitCompassHeading) !== null && _a !== void 0 ? _a : null);
            }
            else if (e.absolute === absolute.current) {
                updateAlpha(e.alpha);
            }
        };
        // @ts-ignore
        window.addEventListener("deviceorientationabsolute", el);
        window.addEventListener("deviceorientation", el);
        return () => {
            // @ts-ignore
            window.removeEventListener("deviceorientationabsolute", el);
            window.removeEventListener("deviceorientation", el);
        };
    }, []);
    return alpha;
};
export default useCompass;
export const requestPermission = () => {
    const ret = Promise.resolve("granted");
    // @ts-ignore
    if (isSafari && typeof DeviceOrientationEvent !== 'undefined' && typeof (DeviceOrientationEvent === null || DeviceOrientationEvent === void 0 ? void 0 : DeviceOrientationEvent.requestPermission) === "function") {
        // @ts-ignore
        return DeviceOrientationEvent.requestPermission();
    }
    return ret;
};
export const isSafari = (() => {
    try {
        return Boolean(navigator &&
            navigator.userAgent &&
            navigator.userAgent.includes("Safari/") &&
            !(navigator.userAgent.includes("Chrome/") ||
                navigator.userAgent.includes("Chromium/")));
    }
    catch (_a) {
        return false;
    }
})();
//# sourceMappingURL=index.js.map