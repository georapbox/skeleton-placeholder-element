[![npm version](https://img.shields.io/npm/v/@georapbox/skeleton-placeholder-element.svg)](https://www.npmjs.com/package/@georapbox/skeleton-placeholder-element)
[![npm license](https://img.shields.io/npm/l/@georapbox/skeleton-placeholder-element.svg)](https://www.npmjs.com/package/@georapbox/skeleton-placeholder-element)

[demo]: https://georapbox.github.io/skeleton-placeholder-element/
[license]: https://github.com/georapbox/skeleton-placeholder-element/blob/main/LICENSE
[changelog]: https://github.com/georapbox/skeleton-placeholder-element/blob/main/CHANGELOG.md

# &lt;skeleton-placeholder&gt;

A custom element that acts as a placeholder to indicate that some content will eventually be rendered.

[API documentation](#api) &bull; [Demo][demo]

## Install

```sh
npm install --save @georapbox/skeleton-placeholder-element
```

## Usage

### Script

```js
import { SkeletonPlaceholder } from './node_modules/@georapbox/skeleton-placeholder-element/dist/skeleton-placeholder.js';

// Manually define the element.
SkeletonPlaceholder.defineCustomElement();
```

Alternatively, you can import the automatically defined custom element.

```js
import './node_modules/@georapbox/skeleton-placeholder-element/dist/skeleton-placeholder-defined.js';
```

### Markup

```html
<skeleton-placeholder effect="wave" variant="pill"></skeleton-placeholder>
```

### Style

By default, the component is style-free to remain as less opinionated as possible. However, you can style the various elements of the component using [CSS Parts](#css-parts) and [CSS Custom Properties](#css-custom-properties) provided for this purpose.

## API

### Properties
| Name | Reflects | Type | Required | Default | Description |
| ---- | -------- | ---- | -------- | ------- | ----------- |
| `effect` | ✓ | `'none' \| 'wave' \| 'fade'` | - | `'none'` | The animation effect the skeleton element will use. |
| `variant` | ✓ | `'circle' \| 'rect' \| 'pill'` | - | `""` | The skeleton's variations. This is just a set of predefined `border-radius` values. For more flexibility, you can use the `--border-radius` custom CSS property. |

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
| `--border-radius` | The border radius of the placeholder element. |
| `--color` | The color of the placeholder element. |
| `--wave-color` | The color of the wave effect. |

### Methods

| Name | Type | Description | Arguments |
| ---- | ---- | ----------- | --------- |
| `defineCustomElement` | Static | Defines/registers the custom element with the name provided. If no name is provided, the default name is used. The method checks if the element is already defined, hence will skip trying to redefine it. | `elementName='skeleton-placeholder'` |

## Changelog

For API updates and breaking changes, check the [CHANGELOG][changelog].

## Development setup

### Prerequisites

The project requires `Node.js` and `npm` to be installed on your environment. Preferrably, use [nvm](https://github.com/nvm-sh/nvm) Node Version Manager and use the version of Node.js specified in the `.nvmrc` file by running `nvm use`.

### Install dependencies

Install the project dependencies by running the following command.

```sh
npm install
```

### Build for development

Watch for changes and start a development server by running the following command.

```sh
npm start
```

### Linting

Lint the code by running the following command.

```sh
npm run lint
```

### Testing

Run the tests by running any of the following commands.

```sh
npm test
npm run test:watch # watch mode
```

### Build for production

Create a production build by running the following command.

```sh
npm run build
```

## License

[The MIT License (MIT)][license]
