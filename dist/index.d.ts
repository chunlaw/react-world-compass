export type DeviceOrientationPermission = "granted" | "denied" | "default";
export type OrientationState = {
    degree: number;
    accuracy: number;
};
declare const useCompass: (interval?: number) => OrientationState | null;
export default useCompass;
export declare const requestPermission: () => Promise<DeviceOrientationPermission>;
export declare const isSafari: boolean;
