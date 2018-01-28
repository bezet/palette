# palette [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]
> A hopefully helpful library for displaying color palette in the browser for a quick reference during development.

[DEMO](https://bezet.github.io/palette/)

## Installation

```bash
npm i @bezet/palette
```


## Usage
### Add styles
`<link rel="stylesheet" type="text/css" href="dist/palette.css">`

### Add JS
Either
```
import Palette from '@bezet/palette';
const myPalette = new Palette({ colors: [
  'rgba(117, 79, 68, 1)',
  'rgba(236, 115, 87, 1)',
  'rgba(225, 206, 122, 1)',
  'rgba(253, 214, 146, 1)',
  'rgba(251, 255, 185, 1)',
] });
```

or
```
<script type="text/javascript" src="dist/palette.js"></script>
<script type="text/javascript">
  var myPalette = new Palette({ colors: [
    'rgba(117, 79, 68, 1)',
    'rgba(236, 115, 87, 1)',
    'rgba(225, 206, 122, 1)',
    'rgba(253, 214, 146, 1)',
    'rgba(251, 255, 185, 1)',
  ] });
</script>
```

## License

MIT © [bezet](github.com/bezet)


[npm-image]: https://badge.fury.io/js/%40bezet%2Fpalette.svg
[npm-url]: https://npmjs.org/package/@bezet/palette
[daviddm-image]: https://david-dm.org/bezet/palette.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/bezet/palette
