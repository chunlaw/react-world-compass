import { useEffect, useMemo, useRef, useState } from "react";
import throttle from "lodash.throttle";
const useCompass = (interval = 20) => {
    const absolute = useRef(false);
    const [state, setState] = useState(null);
    const updateAlpha = useMemo(() => throttle((_state) => {
        setState(_state);
    }, Math.max(5, interval)), []);
    useEffect(() => {
        const el = (e) => {
            if (e.absolute)
                absolute.current = true;
            // @ts-ignore
            if (typeof e.webkitCompassHeading !== "undefined") {
                // @ts-ignore
                updateAlpha({ degree: 360 - e.webkitCompassHeading, accuracy: e.webkitCompassAccuracy });
            }
            else if (e.absolute === absolute.current) {
                updateAlpha(e.alpha ? { degree: e.alpha, accuracy: 0 } : null);
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
    return state;
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