import { elementUpdated, expect, fixture, fixtureCleanup, html } from '@open-wc/testing';
import { SkeletonPlaceholder } from '../src/skeleton-placeholder.js';

SkeletonPlaceholder.defineCustomElement();

describe('<skeleton-placeholder>', () => {
  describe('accessibility', () => {
    it('passes accessibility test', async () => {
      const el = await fixture(html`<skeleton-placeholder></skeleton-placeholder>`);
      await expect(el).to.be.accessible();
    });
  });

  describe('attributes/properties', () => {
    // effect
    it('property effect is "none" when attribute effect is not set', async () => {
      const el = await fixture(html`<skeleton-placeholder></skeleton-placeholder>`);
      expect(el.effect).to.equal('none');
    });

    it('attribute effect is null when property effect is not set', async () => {
      const el = await fixture(html`<skeleton-placeholder></skeleton-placeholder>`);
      expect(el.getAttribute('effect')).to.be.null;
    });

    it('property effect is "none" when attribute efect is "none"', async () => {
      const el = await fixture(html`<skeleton-placeholder effect="none"></skeleton-placeholder>`);
      expect(el.effect).to.equal('none');
    });

    it('attribute effect is "none" when property effect is "none"', async () => {
      const el = await fixture(html`<skeleton-placeholder></skeleton-placeholder>`);
      el.effect = 'none';
      await elementUpdated(el);
      expect(el.getAttribute('effect')).to.equal('none');
    });

    it('property effect is "wave" when attribute effect is "wave"', async () => {
      const el = await fixture(html`<skeleton-placeholder effect="wave"></skeleton-placeholder>`);
      expect(el.effect).to.equal('wave');
    });

    it('attribute effect is "wave" when property effect is "wave"', async () => {
      const el = await fixture(html`<skeleton-placeholder></skeleton-placeholder>`);
      el.effect = 'wave';
      await elementUpdated(el);
      expect(el.getAttribute('effect')).to.equal('wave');
    });

    it('property effect is "fade" when attribute effect is "fade"', async () => {
      const el = await fixture(html`<skeleton-placeholder effect="fade"></skeleton-placeholder>`);
      expect(el.effect).to.equal('fade');
    });

    it('attribute effect is "fade" when property effect is "fade"', async () => {
      const el = await fixture(html`<skeleton-placeholder></skeleton-placeholder>`);
      el.effect = 'fade';
      await elementUpdated(el);
      expect(el.getAttribute('effect')).to.equal('fade');
    });

    // variant
    it('property variant is "" when attribute variant is not set', async () => {
      const el = await fixture(html`<skeleton-placeholder></skeleton-placeholder>`);
      expect(el.variant).to.equal('');
    });

    it('attribute variant is null when property variant is not set', async () => {
      const el = await fixture(html`<skeleton-placeholder></skeleton-placeholder>`);
      expect(el.getAttribute('variant')).to.be.null;
    });

    it('property variant is "circle" when attribute variant is "circle"', async () => {
      const el = await fixture(html`<skeleton-placeholder variant="circle"></skeleton-placeholder>`);
      expect(el.variant).to.equal('circle');
    });

    it('attribute variant is "circle" when property variant is "circle"', async () => {
      const el = await fixture(html`<skeleton-placeholder></skeleton-placeholder>`);
      el.variant = 'circle';
      await elementUpdated(el);
      expect(el.getAttribute('variant')).to.equal('circle');
    });

    it('property variant is "rect" when attribute variant is "rect"', async () => {
      const el = await fixture(html`<skeleton-placeholder variant="rect"></skeleton-placeholder>`);
      expect(el.variant).to.equal('rect');
    });

    it('attribute variant is "rect" when property variant is "rect"', async () => {
      const el = await fixture(html`<skeleton-placeholder></skeleton-placeholder>`);
      el.variant = 'rect';
      await elementUpdated(el);
      expect(el.getAttribute('variant')).to.equal('rect');
    });

    it('property variant is "pill" when attribute variant is "pill"', async () => {
      const el = await fixture(html`<skeleton-placeholder variant="pill"></skeleton-placeholder>`);
      expect(el.variant).to.equal('pill');
    });

    it('attribute variant is "pill" when property variant is "pill"', async () => {
      const el = await fixture(html`<skeleton-placeholder></skeleton-placeholder>`);
      el.variant = 'pill';
      await elementUpdated(el);
      expect(el.getAttribute('variant')).to.equal('pill');
    });
  });

  afterEach(() => {
    fixtureCleanup();
  });
});
