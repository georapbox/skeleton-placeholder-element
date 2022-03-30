import { elementUpdated, expect, fixture, fixtureCleanup, html } from '@open-wc/testing';
import { SkeletonPlaceholder } from '../src/skeleton-placeholder.js';

SkeletonPlaceholder.defineCustomElement();

describe('<skeleton-placeholder>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture(html`<skeleton-placeholder></skeleton-placeholder>`);

    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture(html`<skeleton-placeholder></skeleton-placeholder>`);

    expect(el.effect).to.equal('none');
    expect(el.getAttribute('effect')).to.equal('none');

    expect(el.variant).to.be.null;
    expect(el.getAttribute('variant')).to.be.null;
  });

  it('change default properties', async () => {
    const el = await fixture(html`
      <skeleton-placeholder effect="fade" variant="rect"></skeleton-placeholder>
    `);

    expect(el.effect).to.equal('fade');
    expect(el.getAttribute('effect')).to.equal('fade');

    expect(el.variant).to.equal('rect');
    expect(el.getAttribute('variant')).to.equal('rect');
  });

  it('change properties programmatically', async () => {
    const el = await fixture(html`<skeleton-placeholder></skeleton-placeholder>`);

    el.effect = 'fade';
    el.variant = 'rect';

    await elementUpdated(el);

    expect(el.effect).to.equal('fade');
    expect(el.getAttribute('effect')).to.equal('fade');

    expect(el.variant).to.equal('rect');
    expect(el.getAttribute('variant')).to.equal('rect');

    el.effect = 'wave';
    el.variant = 'pill';

    await elementUpdated(el);

    expect(el.effect).to.equal('wave');
    expect(el.getAttribute('effect')).to.equal('wave');

    expect(el.variant).to.equal('pill');
    expect(el.getAttribute('variant')).to.equal('pill');

    el.effect = 'none';
    el.variant = 'circle';

    await elementUpdated(el);

    expect(el.effect).to.equal('none');
    expect(el.getAttribute('effect')).to.equal('none');

    expect(el.variant).to.equal('circle');
    expect(el.getAttribute('variant')).to.equal('circle');
  });

  afterEach(() => {
    fixtureCleanup();
  });
});
