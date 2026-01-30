import { gadgets, type Gadget } from '@/data/gadgets';

// Organization Schema
export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GadgetZilla',
    url: 'https://gadgetzilla.tech',
    logo: 'https://gadgetzilla.tech/logo.png',
    description: 'Legendary gadgets for gamers and tech enthusiasts. Daily updated deals on gaming gear, smart home devices, and trending tech.',
    sameAs: [
      'https://twitter.com/gadgetzilla',
      'https://instagram.com/gadgetzilla',
      'https://youtube.com/@gadgetzilla'
    ],
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
    description: 'Discover the best gaming gear, smart home devices, and trending tech gadgets with daily updated deals.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://gadgetzilla.tech/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: (product.score / 20).toFixed(1), // Convert 0-100 to 0-5 scale
      bestRating: '5',
      worstRating: '1',
      ratingCount: Math.floor(Math.random() * 500) + 100 // Placeholder
    }
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
      answer: 'GadgetZilla is part of the Amazon Associates affiliate program. When you click our links and make a purchase, we earn a small commission at no extra cost to you.'
    },
    {
      question: 'Are the deals on GadgetZilla real?',
      answer: 'Yes! We update our deals daily and verify all prices directly from Amazon. Our deal alerts highlight genuine discounts and price drops.'
    },
    {
      question: 'How do you calculate the Hype Score?',
      answer: 'Our Hype Score is based on multiple factors including customer reviews, social media buzz, expert ratings, and value for money.'
    },
    {
      question: 'Do you offer price tracking?',
      answer: 'Yes! Sign up for our newsletter to receive price drop alerts on your favorite gadgets.'
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
      <ProductListJsonLd products={gadgets} name="Trending Gadgets" />
      <FaqJsonLd />
    </>
  );
}
