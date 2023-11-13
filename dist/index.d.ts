declare const useCompass: (interval?: number) => number | null;
export default useCompass;
export declare const requestPermission: () => Promise<"granted" | "denied" | "default">;
export declare const isSafari: boolean;
