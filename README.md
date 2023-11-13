# React World Compass

The react package is to provide a `useCompass` function to obtain the absolute orientation of the device. The package use the device event `deviceorientationabsolute` for Chrome/Edge in Android and `webkitCompassHeading` for Safari in iOS. Sorry to Firefox.

# Installation

```
yarn add react-world-compass
```
or
```
npm install react-world-compass
```

# Usage


```ts
import useCompass, { requestPermission, isSafari } from "react-world-compass"
```

`useCompass` is a React Hook that lets you obtain the real time degree absolute to the North.

```ts
function MyComponent() {
  const degree = useCompass(interval)
  // ...
}
```

For the Safari in iOS, you should call `requestPermission` through a **user event**, e.g., clicking a button box, before using `useCompass`.

## Paramenter
- `interval`: The interval you want to capture the compass value. Type: `number`, default: `20` (i.e., 20ms)

## Returns

`useCompass()` returns the degree absolute to the North, (i.e., 90 for East, 180 for South, and 270 for West). If the device not support such feature, `null` value will be returned.

# License

MIT License