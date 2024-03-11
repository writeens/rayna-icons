![icons](https://raw.githubusercontent.com/writeens/raynaicons/main/assets/icons.png)

## raynaicons

<p align="center">
  <a href="https://github.com/writeens/raynaicons/blob/master/license">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a aria-label="build status" href="https://github.com/writeens/raynaicons/actions/workflows/ci.yml">
    <img alt="" src="https://github.com/writeens/raynaicons/actions/workflows/ci.yml/badge.svg?branch=main&event=push" />
  </a>
</p>

> [!WARNING]  
> This library is not ready for use in a production environment. It is missing 250+ icons. These icons will be added soon.

## Installing

Using npm:

```bash
$ npm install raynaicons
```

Using yarn:

```bash
$ yarn add raynaicons
```

Using pnpm:

```bash
$ pnpm add raynaicons
```

## Usage

After installing `raynaicons`, you can import the icons using any of the following approaches:

### Using imports

Import each icon individually:

```js
import { FirstAidFilled } from "raynaicons";
```

You can also use the default export:

```js
import raynaicons from "raynaicons";

console.log(raynaicons.FirstAidFilled); // console.log(raynaicons[FirstAidFilled])

// {
//   name: 'FirstAidFilled',
//   width: 24,
//   height: 24,
//   viewBox: '0 0 24 24',
//   keywords: [ 'health' ],
//   toSVG: [Function]
// }
```

### Using require

```js
const raynaicons = require("raynaicons");

console.log(raynaicons.FirstAidFilled); // console.log(raynaicons[FirstAidFilled])

// {
//   name: 'FirstAidFilled',
//   width: 24,
//   height: 24,
//   viewBox: '0 0 24 24',
//   keywords: [ 'health' ],
//   toSVG: [Function]
// }
```

## Properties

### `name`

Returns the name of the icon.

### `width`

Returns the default width of the icon.

### `height`

Returns the default height of the icon.

### `viewBox`

Returns the default viewBox of the icon.

### `keywords`

Returns the keywords associated with the icon.

### `toSVG`

Returns an SVGElement of the icon.

```js
raynaicons.FirstAidFilled.toSVG();
```

The `.toSVG()` method accepts an optional `options` object. This can be used to add custom CSS class names, accessibility options and sizes.

```js
raynaicons.FirstAidFilled.toSVG({
  class: "custom-class",
  size: 30,
  "aria-hidden": true,
}).outerHTML;
// <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" class="rayna rayna-first-aid-filled custom-class" aria-hidden="true"><path d="M8.038 6.667H5.722A2.22 2.22 ...</svg>
```
