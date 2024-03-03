# raynaicons-react

[![npm version](https://img.shields.io/npm/v/raynaicons)](https://www.npmjs.org/package/raynaicons-react)

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
