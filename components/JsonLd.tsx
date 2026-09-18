import { gadgets, type Gadget } from '@/data/gadgets';

// Organization Schema
export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GadgetZilla',
    url: 'https://gadgetzilla.tech',
    logo: 'https://gadgetzilla.tech/icon',
    description: 'Independent gadget catalog with Amazon Associate links. Prices are snapshots; confirm on Amazon.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'hello@gadgetzilla.tech'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Website Schema with SearchAction
export function WebsiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GadgetZilla',
    url: 'https://gadgetzilla.tech',
    description: 'Independent gadget catalog with Amazon Associate links.',
    publisher: {
      '@type': 'Organization',
      name: 'GadgetZilla'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Product Schema for individual products
export function ProductJsonLd({ product }: { product: Gadget }) {
  const priceValue = product.price.replace('$', '').replace(',', '');

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: product.name.split(' ')[0] // Extract brand from product name
    },
    offers: {
      '@type': 'Offer',
      url: product.amazonUrl,
      priceCurrency: 'USD',
      price: priceValue,
      priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Amazon'
      }
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ItemList Schema for product collections
export function ProductListJsonLd({ products, name }: { products: Gadget[]; name: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: name,
    numberOfItems: products.length,
    itemListElement: products.slice(0, 10).map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: product.image,
        url: product.amazonUrl,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: product.price.replace('$', '').replace(',', ''),
          availability: 'https://schema.org/InStock'
        }
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// BreadcrumbList Schema
export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema for common questions
export function FaqJsonLd() {
  const faqs = [
    {
      question: 'How does GadgetZilla make money?',
      answer: 'GadgetZilla is part of the Amazon Associates affiliate program. When you click our links and make a purchase, we may earn a commission at no extra cost to you.'
    },
    {
      question: 'Are the prices on GadgetZilla live Amazon prices?',
      answer: 'No. Listed prices are snapshots from the catalog file. Confirm the current price and stock on Amazon before you buy.'
    },
    {
      question: 'Do you publish hype scores or hot deals?',
      answer: 'No. We do not invent scores or mark items as hot deals without a sourced price check.'
    },
    {
      question: 'What is cost per use?',
      answer: 'A free decision number: price divided by how many times you will use the gadget. No email is required. Catalog Amazon links appear only after that number.'
    },
    {
      question: 'What happens if I submit my email?',
      answer: 'Only if you choose to. See the privacy policy. If a list is not configured, the form opens email to hello@gadgetzilla.tech.'
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Combined Schema component for homepage
export function HomePageJsonLd() {
  return (
    <>
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <ProductListJsonLd products={gadgets} name="Gadget catalog" />
      <FaqJsonLd />
    </>
  );
}
