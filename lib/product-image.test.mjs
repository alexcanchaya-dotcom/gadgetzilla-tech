import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { amazonImageUrl, resolveProductImageSrc } from './product-image.ts';

const catalog = JSON.parse(readFileSync(new URL('../data/catalog.json', import.meta.url), 'utf8'));

describe('product images', () => {
  it('builds the Amazon image URL from a real ASIN', () => {
    assert.equal(
      amazonImageUrl('B0CKD964SV'),
      'https://m.media-amazon.com/images/P/B0CKD964SV.01.LZZZZZZZ.jpg',
    );
    assert.equal(amazonImageUrl(''), '');
    assert.equal(amazonImageUrl('REPLACE0ASIN'), '');
  });

  it('replaces Unsplash/reused stock with the Amazon image when an ASIN exists', () => {
    assert.equal(
      resolveProductImageSrc(
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=900',
        'B0CKD964SV',
      ),
      'https://m.media-amazon.com/images/P/B0CKD964SV.01.LZZZZZZZ.jpg',
    );
    assert.equal(
      resolveProductImageSrc('https://m.media-amazon.com/images/P/B081415GCS.01.LZZZZZZZ.jpg', 'B081415GCS'),
      'https://m.media-amazon.com/images/P/B081415GCS.01.LZZZZZZZ.jpg',
    );
    assert.equal(resolveProductImageSrc('', 'B0CKD964SV'), '');
  });

  it('does not keep Unsplash URLs on catalog products', () => {
    for (const product of catalog.products) {
      assert.equal(String(product.image || '').includes('unsplash.com'), false, product.name);
      const resolved = resolveProductImageSrc(product.image, product.asin);
      if (resolved) {
        assert.match(resolved, /m\.media-amazon\.com\/images\//);
      }
    }
  });
});
