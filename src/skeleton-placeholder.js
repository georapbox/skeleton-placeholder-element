// @ts-check

/**
 * Represents a value that may be of type T, or null.
 *
 * @template T
 * @typedef {T | null} Nullable
 */

/** @typedef {'wave' | 'fade' | 'none'} Effect */
/** @typedef {'circle' | 'rect' | 'pill'} Variant */

const styles = /* css */ `
  :host {
    --border-radius: 0.25rem;
    --color: #ced4da;
    --wave-color: #e9ecef;
    box-sizing: border-box;
    display: block;
    position: relative;
  }
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }
  [hidden] {
    display: none !important;
  }
  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }
  .skeleton__placeholder {
    flex: 1 1 auto;
    background-color: var(--color);
    border-radius: var(--border-radius);
  }
  .skeleton__placeholder--circle {
    border-radius: 50%;
  }
  .skeleton__placeholder--rect {
    border-radius: 0;
  }
  .skeleton__placeholder--pill {
    border-radius: 9999px;
  }
  .skeleton--wave .skeleton__placeholder {
    background-image: linear-gradient(270deg, var(--wave-color), var(--color), var(--color), var(--wave-color));
    background-size: 400% 100%;
    transform: translate3d(0, 0, 0);
    animation: wave-animation 8s ease-in-out infinite;
  }
  .skeleton--fade .skeleton__placeholder {
    animation: fade-animation 2s ease-in-out 0.5s infinite;
  }
  @keyframes wave-animation {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  @keyframes fade-animation {
    0% { opacity: 1; }
    50% { opacity: 0.4; }
    100% { opacity: 1; }
  }
`;

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>${styles}</style>
  <div part="wrapper" class="skeleton" aria-busy="true" aria-live="polite">
    <div part="placeholder" class="skeleton__placeholder"><slot></slot></div>
  </div>
`;

/**
 * @summary A custom element that acts as a placeholder to indicate that some content will eventually be rendered.
 * @documentation https://github.com/georapbox/skeleton-placeholder-element#readme
 *
 * @tagname skeleton-placeholder This is the default tag name, unless overridden by the `defineCustomElement` method.
 * @extends HTMLElement
 *
 * @property {Effect} effect - The animation effect the skeleton element will use.
 * @property {Variant} variant - The variant of the skeleton.
 *
 * @atttribute {Effect} effect - Reflects the effect property.
 * @atttribute {Variant} variant - Reflects the variant property.
 *
 * @slot - The default slot that can be used to add a caption to the skeleton.
 *
 * @csspart wrapper - The skeleton's internal wrapper element.
 * @csspart placeholder - The skeleton's placeholder element.
 *
 * @cssproperty --border-radius - The border radius of the placeholder element.
 * @cssproperty --color - The color of the placeholder element.
 * @cssproperty --wave-color - The color of the wave effect.
 *
 * @method defineCustomElement - Static method. Defines the custom element with the given name.
 */
class SkeletonPlaceholder extends HTMLElement {
  /** @type {Nullable<HTMLDivElement>} */
  #wrapperEl = null;

  /** @type {Nullable<HTMLDivElement>} */
  #placeholderEl = null;

  constructor() {
    super();

    if (!this.shadowRoot) {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }

    this.#wrapperEl = this.shadowRoot?.querySelector('[part="wrapper"]') ?? null;
    this.#placeholderEl = this.shadowRoot?.querySelector('[part="placeholder"]') ?? null;
  }

  static get observedAttributes() {
    return ['effect', 'variant'];
  }

  /**
   * Lifecycle method that is called when attributes are changed, added, removed, or replaced.
   *
   * @param {string} name - The name of the attribute.
   * @param {string} oldValue - The old value of the attribute.
   * @param {string} newValue - The new value of the attribute.
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'effect' && oldValue !== newValue && this.#wrapperEl) {
      this.#wrapperEl.className = this.#getWrapperElementClassName(/** @type {Effect} */ (newValue));
    }

    if (name === 'variant' && oldValue !== newValue && this.#placeholderEl) {
      this.#placeholderEl.className = this.#getPlaceholderElementClassName(/** @type {Variant} */ (newValue));
    }
  }

  /**
   * @type {Effect} - The animation effect the skeleton element will use.
   * @default 'none'
   * @attribute effect - Reflects the effect property.
   */
  get effect() {
    return /** @type {Effect} */ (this.getAttribute('effect')) || 'none';
  }

  set effect(value) {
    this.setAttribute('effect', value);
  }

  /**
   * @type {Variant} - The variant of the skeleton.
   * @default ''
   * @attribute variant - Reflects the variant property.
   */
  get variant() {
    return /** @type {Variant} */ (this.getAttribute('variant')) || '';
  }

  set variant(value) {
    this.setAttribute('variant', value);
  }

  /**
   * Lifecycle method that is called when the element is added to the DOM.
   */
  connectedCallback() {
    this.#upgradeProperty('effect');
    this.#upgradeProperty('variant');
  }

  /**
   * Get the class name for the wrapper element based on the effect value.
   *
   * @param {Effect} effectValue - The value of the effect attribute.
   * @returns {string} The class name for the wrapper element.
   */
  #getWrapperElementClassName(effectValue) {
    let className = '';

    switch (effectValue) {
      case 'wave':
        className = 'skeleton skeleton--wave';
        break;
      case 'fade':
        className = 'skeleton skeleton--fade';
        break;
      case 'none':
        className = 'skeleton';
        break;
      default:
        className = 'skeleton';
    }

    return className;
  }

  /**
   * Get the class name for the placeholder element based on the variant value.
   *
   * @param {Variant} variantValue - The value of the variant attribute.
   * @returns {string} The class name for the placeholder element.
   */
  #getPlaceholderElementClassName(variantValue) {
    let className = '';

    switch (variantValue) {
      case 'circle':
        className = 'skeleton__placeholder skeleton__placeholder--circle';
        break;
      case 'rect':
        className = 'skeleton__placeholder skeleton__placeholder--rect';
        break;
      case 'pill':
        className = 'skeleton__placeholder skeleton__placeholder--pill';
        break;
      default:
        className = 'skeleton__placeholder';
    }

    return className;
  }

  /**
   * This is to safe guard against cases where, for instance, a framework may have added the element to the page and
   * set a value on one of its properties, but lazy loaded its definition. Without this guard, the upgraded element would
   * miss that property and the instance property would prevent the class property setter from ever being called.
   *
   * https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
   *
   * @param {'effect' | 'variant'} prop - The property to upgrade.
   */
  #upgradeProperty(prop) {
    /** @type {any} */
    const instance = this;

    if (Object.prototype.hasOwnProperty.call(instance, prop)) {
      const value = instance[prop];
      delete instance[prop];
      instance[prop] = value;
    }
  }

  /**
   * Defines a custom element with the given name.
   * The name must contain a dash (-).
   *
   * @param {string} [elementName='skeleton-placeholder'] - The name of the custom element.
   * @example
   *
   * SkeletonPlaceholder.defineCustomElement('my-skeleton-placeholder');
   */
  static defineCustomElement(elementName = 'skeleton-placeholder') {
    if (typeof window !== 'undefined' && !window.customElements.get(elementName)) {
      window.customElements.define(elementName, SkeletonPlaceholder);
    }
  }
}

export { SkeletonPlaceholder };
