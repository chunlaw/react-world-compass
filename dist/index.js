"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lodash_throttle_1 = __importDefault(require("lodash.throttle"));
const useCompass = (interval = 20) => {
    const absolute = (0, react_1.useRef)(false);
    const [alpha, setAlpha] = (0, react_1.useState)(null);
    const updateAlpha = (0, react_1.useMemo)(() => (0, lodash_throttle_1.default)((alpha) => {
        setAlpha(alpha);
    }, Math.max(5, interval)), []);
    (0, react_1.useEffect)(() => {
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
exports.default = useCompass;
//# sourceMappingURL=index.js.map