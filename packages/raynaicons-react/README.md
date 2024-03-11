![icons](https://raw.githubusercontent.com/writeens/raynaicons/main/assets/icons.png)

## raynaicons-react

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
$ npm install raynaicons-react
```

Using yarn:

```bash
$ yarn add raynaicons-react
```

Using pnpm:

```bash
$ pnpm add raynaicons-react
```

## Usage

After installing `raynaicons-react`, you can import each icon individually as a React component. This allows you to only import the icon you need.

```js
import { FirstAidFilled } from "raynaicons-react";

function CustomIcon() {
  return (
    <div>
      <FirstAidFilled
        className="custom-class"
        size={30}
        title="Hello World"
        aria-hidden={false}
      />
      <p>...</p>
    </div>
  );
}
```
