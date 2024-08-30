import { elementUpdated, expect, fixture, fixtureCleanup, html } from '@open-wc/testing';
import { SkeletonPlaceholder } from '../src/skeleton-placeholder.js';

describe('<skeleton-placeholder> upgrading', () => {
  it('default properties', async () => {
    const el = await fixture(html`<skeleton-placeholder></skeleton-placeholder>`);

    // Update properties before upgrading
    el.effect = 'fade';
    el.variant = 'rect';

    // Upgrade custom element
    SkeletonPlaceholder.defineCustomElement();

    await elementUpdated(el);

    expect(el.getAttribute('effect')).to.equal('fade');
    expect(el.getAttribute('variant')).to.equal('rect');
  });

  afterEach(() => {
    fixtureCleanup();
  });
});
