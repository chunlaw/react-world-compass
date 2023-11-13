import { useEffect, useMemo, useRef, useState } from "react";
import throttle from "lodash.throttle";

const useCompass = (interval: number = 20) => {
  const absolute = useRef<boolean>(false);
  const [alpha, setAlpha] = useState<number | null>(null);

  const updateAlpha = useMemo(
    () =>
      throttle(
        (alpha: number | null) => {
          setAlpha(alpha);
        },
        Math.max(5, interval)
      ),
    []
  );

  useEffect(() => {
    const el = (e: DeviceOrientationEvent) => {
      if (e.absolute) absolute.current = true;
      // @ts-ignore
      if (typeof e.webkitCompassHeading !== "undefined") {
        // @ts-ignore
        updateAlpha(e.webkitCompassHeading ?? null);
      } else if (e.absolute === absolute.current) {
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

export const requestPermission = (): Promise<"granted" | "denied" | "default"> => {
  const ret = Promise.resolve("granted" as "granted" | "denied" | "default")
  // @ts-ignore
  if ( isSafari && typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent?.requestPermission === "function" ) {
    // @ts-ignore
    return DeviceOrientationEvent.requestPermission()
  }
  return ret
}

export const isSafari = (() => {
  try {
    return Boolean(
      navigator &&
        navigator.userAgent &&
        navigator.userAgent.includes("Safari/") &&
        !(
          navigator.userAgent.includes("Chrome/") ||
          navigator.userAgent.includes("Chromium/")
        ),
    );
  } catch {
    return false;
  }
})()