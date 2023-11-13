"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSafari = exports.requestPermission = void 0;
const react_1 = require("react");
const lodash_throttle_1 = __importDefault(require("lodash.throttle"));
const useCompass = (interval = 20) => {
    const absolute = (0, react_1.useRef)(false);
    const [state, setState] = (0, react_1.useState)(null);
    const updateAlpha = (0, react_1.useMemo)(() => (0, lodash_throttle_1.default)((_state) => {
        setState(_state);
    }, Math.max(5, interval)), []);
    (0, react_1.useEffect)(() => {
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
exports.default = useCompass;
const requestPermission = () => {
    const ret = Promise.resolve("granted");
    // @ts-ignore
    if (exports.isSafari && typeof DeviceOrientationEvent !== 'undefined' && typeof (DeviceOrientationEvent === null || DeviceOrientationEvent === void 0 ? void 0 : DeviceOrientationEvent.requestPermission) === "function") {
        // @ts-ignore
        return DeviceOrientationEvent.requestPermission();
    }
    return ret;
};
exports.requestPermission = requestPermission;
exports.isSafari = (() => {
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