[![npm version](https://img.shields.io/npm/v/@georapbox/skeleton-placeholder-element.svg)](https://www.npmjs.com/package/@georapbox/skeleton-placeholder-element)
[![npm license](https://img.shields.io/npm/l/@georapbox/skeleton-placeholder-element.svg)](https://www.npmjs.com/package/@georapbox/skeleton-placeholder-element)

[demo]: https://georapbox.github.io/skeleton-placeholder-element/
[support]: https://caniuse.com/#feat=custom-elementsv1
[polyfill]: https://github.com/webcomponents/polyfills/tree/master/packages/custom-elements
[license]: https://georapbox.mit-license.org/@2022
[changelog]: https://github.com/georapbox/skeleton-placeholder-element/blob/main/CHANGELOG.md

# &lt;skeleton-placeholder&gt;

A custom element that acts as a placeholder to indicate that some content will eventually be rendered.

[API documentation](#api) &bull; [Demo][demo]

## Install

```sh
$ npm install --save @georapbox/skeleton-placeholder-element
```

## Usage

### Script

```js
import { SkeletonPlaceholder } from './node_modules/@georapbox/skeleton-placeholder-element/dist/skeleton-placeholder.min.js';

// Manually define the element.
SkeletonPlaceholder.defineCustomElement();
```

Alternatively, you can import the automatically defined custom element.

```js
import './node_modules/@georapbox/skeleton-placeholder-element/dist/skeleton-placeholder-defined.min.js';
```

### Markup

```html
<skeleton-placeholder effect="wave" variant="pill"></skeleton-placeholder>
```

## API

### Properties
| Name | Reflects | Type | Default | Description |
| ---- | -------- | ---- | ------- | ----------- |
| `effect` | ✓ | `'none' \| 'wave' \| 'fade'` | `'none'` | Optional. Determines the animation effect the skeleton element will use. |
| `variant` | ✓ | `'circle' \| 'rect' \| 'pill'` | `null` | Optional. Determines the skeleton's variations. This is just a set of predefined `border-radius` values. For more flexibility, you can use the `--border-radius` custom CSS property. |

All of the above properties reflect their values as HTML attributes to keep the element's DOM representation in sync with its JavaScript state.

### Slots

| Name | Description |
| ---- | ----------- |
| (default) | It can be used in the rare scenario that you might need to render something inside the placeholder element, such as an image, etc. Check the [slot example]( https://georapbox.github.io/skeleton-placeholder-element/#slot-example) demo. |

### CSS Parts

| Name | Description |
| ---- | ----------- |
| `wrapper` | The skeleton's internal wrapper element. |
| `placeholder` | The skeleton's placeholder element. |

### CSS Custom Properties

| Name | Description |
| ---- | ----------- |
| `--border-radius` | The element's border radius. |
| `--color` | The color of the element. |
| `--wave-color` | The color of the wave effect. |


## Changelog

For API updates and breaking changes, check the [CHANGELOG][changelog].

## Browser support

Browsers without native [custom element support][support] require a [polyfill][polyfill].

- Firefox
- Chrome
- Microsoft Edge
- Safari

## License

[The MIT License (MIT)][license]
