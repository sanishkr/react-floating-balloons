# React Floating Balloons 🎈💥

**Version Updates**

- [3.0.2] : Update balloon pop audio cdn
- [3.0.1] : Added optional `hangOnTop` feature, Added NextJS Example
- [3.0.0] : Removed native elements, used `styled-components`. Added optional `loop` prop
- [2.1.1] : Add optional custom props `count, msgText, colors, popVolumeLevel`
- [2.0.2] : Add 2 new colors `orange, purple`
- [2.0.1] : Pop event on single click for touch screen devices
- [2.0.0] : Added Pop animation and Sound

##

## Feature Bonus

- Double-Click event pops the Balloons
- Single Click pops on touch enabled devices
- All Balloons pops with same colored burst animation

## Motivation

Twitter and
[this post](https://erdoganbavas.medium.com/creating-birthday-balloons-like-twitter-profile-no-image-5348a1dc2720)

## Installation

**npm**

```bash
npm install --save react-floating-balloons
```

### Basic Example

[![Edit react-floating-balloons-basic-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-floating-balloons-basic-example-4cx9kh?fontsize=14&hidenavigation=1&theme=dark)

### NextJS Example(^v3.0.0)

[![Edit nextjs-react-floating-balloons-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/nextjs-react-floating-balloons-example-di5dhp?fontsize=14&hidenavigation=1&theme=dark&view=preview)

### Props

| Name           | Type            | Required | Options                                                | Default                                                  | Description                                               |
| -------------- | --------------- | -------- | ------------------------------------------------------ | -------------------------------------------------------- | --------------------------------------------------------- |
| count          | `number`        | `false`  |                                                        | `7`                                                      | Number of balloons on the screen                          |
| msgText        | `string`        | `false`  |                                                        | `Happy Birthday.`                                        | Msg written on random balloons(Keep it short)             |
| colors         | `Array<String>` | `false`  | `'yellow', 'green', 'blue', 'red', 'orange', 'purple'` | `['yellow', 'green', 'blue', 'red', 'orange', 'purple']` | list for balloons to choose random colors from            |
| popVolumeLevel | `Float`         | `false`  | `0 to 1`                                               | `0.5`                                                    | Volume level for Balloon pop sound                        |
| loop           | `Boolean`       | `false`  | `true\|false`                                          | `true`                                                   | Loop Balloon animation until popped                       |
| hangOnTop      | `Boolean`       | `false`  | `true\|false`                                          | `false`                                                  | Hangs Balloons on top until popped(set `loop` to `false`) |

##

### [Todo]

- [ ] Props validation
- [x] Remove CSS import
- [ ] Fix SSR issues
- [ ] Allow Custom colors
- [ ] Allow custom size
- [ ] Allow style customisation for `msgText`
- [ ] Better burst animation
- [ ] Test cases
- [ ] Balloons string curved
- [ ] Add more examples

##

Note for NextJS Usage: Use `next-global-css` npm module setup for (v2 and below) and use dynamic import feature with `{ ssr: false }` to avoid errors

## Maintenance Status

<img src="https://img.shields.io/badge/maintenance-stable-blue.svg" />

## License

Licensed under the MIT License, Copyright © 2021-present.

See [LICENSE](./LICENSE) for more information.
