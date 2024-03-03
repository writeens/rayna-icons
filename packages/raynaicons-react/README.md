![icons](../../assets/icons.png)

<h1 align="center">raynaicons-react</h1>

<p align="center">
  <a href="https://github.com/writeens/raynaicons/blob/master/license">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a aria-label="build status" href="https://github.com/writeens/raynaicons/actions/workflows/ci.yml">
    <img alt="" src="https://github.com/writeens/raynaicons/actions/workflows/ci.yml/badge.svg?branch=main&event=push">
  </a>
</p>

## Installing

### Package manager

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
  <div>
    <FirstAidFilled
      className="h-6 w-6 custom-class"
      size={30}
      title="Hello World"
      aria-hidden={false}
    />
    <p>...</p>
  </div>;
}
```
