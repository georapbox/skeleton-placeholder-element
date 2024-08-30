/*!
 * @georapbox/skeleton-placeholder-element
 * A custom element that acts as a placeholder to indicate that some content will eventually be rendered.
 *
 * @version 2.0.1
 * @homepage https://github.com/georapbox/skeleton-placeholder-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */
var l=`
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
`,r=document.createElement("template");r.innerHTML=`
  <style>${l}</style>
  <div part="wrapper" class="skeleton" aria-busy="true" aria-live="polite">
    <div part="placeholder" class="skeleton__placeholder"><slot></slot></div>
  </div>
`;var o=class s extends HTMLElement{#e=null;#t=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(r.content.cloneNode(!0)),this.#e=this.shadowRoot?.querySelector('[part="wrapper"]')??null,this.#t=this.shadowRoot?.querySelector('[part="placeholder"]')??null}static get observedAttributes(){return["effect","variant"]}attributeChangedCallback(e,t,a){e==="effect"&&t!==a&&this.#e&&(this.#e.className=this.#o(a)),e==="variant"&&t!==a&&this.#t&&(this.#t.className=this.#r(a))}get effect(){return this.getAttribute("effect")||"none"}set effect(e){this.setAttribute("effect",e)}get variant(){return this.getAttribute("variant")||""}set variant(e){this.setAttribute("variant",e)}connectedCallback(){this.#a("effect"),this.#a("variant")}#o(e){let t="";switch(e){case"wave":t="skeleton skeleton--wave";break;case"fade":t="skeleton skeleton--fade";break;case"none":t="skeleton";break;default:t="skeleton"}return t}#r(e){let t="";switch(e){case"circle":t="skeleton__placeholder skeleton__placeholder--circle";break;case"rect":t="skeleton__placeholder skeleton__placeholder--rect";break;case"pill":t="skeleton__placeholder skeleton__placeholder--pill";break;default:t="skeleton__placeholder"}return t}#a(e){let t=this;if(Object.prototype.hasOwnProperty.call(t,e)){let a=t[e];delete t[e],t[e]=a}}static defineCustomElement(e="skeleton-placeholder"){typeof window<"u"&&!window.customElements.get(e)&&window.customElements.define(e,s)}};export{o as SkeletonPlaceholder};
