const template = document.createElement('template');

template.innerHTML = /* html */`
  <style>
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
  </style>
  <div part="wrapper" class="skeleton" aria-busy="true" aria-live="polite">
    <div part="placeholder" class="skeleton__placeholder"><slot></slot></div>
  </div>
`;

class SkeletonPlaceholder extends HTMLElement {
  #wrapperEl;
  #placeholderEl;

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.#wrapperEl = this.shadowRoot.querySelector('[part="wrapper"]');
    this.#placeholderEl = this.shadowRoot.querySelector('[part="placeholder"]');
  }

  connectedCallback() {
    this.#upgradeProperty('effect');
    this.#upgradeProperty('variant');

    if (!this.effect) {
      this.effect = 'none';
    }
  }

  static get observedAttributes() {
    return ['effect', 'variant'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'effect') {
      this.#wrapperEl.className = this.#getWrapperElementClassName(newValue);
    }

    if (name === 'variant') {
      this.#placeholderEl.className = this.#getPlaceholderElementClassName(newValue);
    }
  }

  get effect() {
    return this.getAttribute('effect');
  }

  set effect(value) {
    this.setAttribute('effect', value);
  }

  get variant() {
    return this.getAttribute('variant');
  }

  set variant(value) {
    this.setAttribute('variant', value);
  }

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
   * https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
   * This is to safe guard against cases where, for instance, a framework
   * may have added the element to the page and set a value on one of its
   * properties, but lazy loaded its definition. Without this guard, the
   * upgraded element would miss that property and the instance property
   * would prevent the class property setter from ever being called.
   */
  #upgradeProperty(prop) {
    if (Object.prototype.hasOwnProperty.call(this, prop)) {
      const value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }

  static defineCustomElement(elementName = 'skeleton-placeholder') {
    if (typeof window !== 'undefined' && !window.customElements.get(elementName)) {
      window.customElements.define(elementName, SkeletonPlaceholder);
    }
  }
}

export { SkeletonPlaceholder };
