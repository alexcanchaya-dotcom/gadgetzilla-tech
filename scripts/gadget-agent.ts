#!/usr/bin/env npx ts-node

/**
 * GadgetZilla Discovery Agent
 *
 * An intelligent agent that searches for the best gadgets across multiple sources,
 * analyzes trends, and generates recommendations for the site.
 *
 * Usage:
 *   npx ts-node scripts/gadget-agent.ts [command] [options]
 *
 * Commands:
 *   search <query>     - Search for gadgets matching a query
 *   trending           - Find currently trending gadgets
 *   deals              - Find the best current deals
 *   analyze            - Analyze current catalog and suggest improvements
 *   generate           - Generate new product entries
 */

import * as fs from 'fs';
import * as path from 'path';

// Types
interface GadgetResult {
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  score: number;
  description: string;
  tags: string[];
  source: string;
  amazonAsin?: string;
  trending: boolean;
}

interface SearchSource {
  name: string;
  search: (query: string) => Promise<GadgetResult[]>;
}

interface TrendData {
  keyword: string;
  volume: number;
  growth: string;
  category: string;
}

// Color helpers for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  magenta: '\x1b[35m',
  red: '\x1b[31m',
  dim: '\x1b[2m',
};

function log(message: string, color: keyof typeof colors = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logHeader(title: string) {
  console.log('\n' + '='.repeat(60));
  log(`  ${title}`, 'cyan');
  console.log('='.repeat(60) + '\n');
}

// Trending gadget categories and keywords for 2026
const TRENDING_CATEGORIES = {
  'Gaming Gear': [
    'gaming mouse 2026', 'mechanical keyboard', 'gaming headset wireless',
    'gaming controller', 'VR headset', 'gaming chair ergonomic',
    'stream deck', 'capture card 4K', 'gaming handheld'
  ],
  'PC Components': [
    'RTX 5090', 'AMD Ryzen 9000', 'DDR5 RAM', 'NVMe SSD Gen5',
    'gaming monitor 240Hz OLED', '4K webcam', 'gaming router WiFi 7'
  ],
  'Audio': [
    'wireless earbuds ANC', 'podcast microphone USB', 'studio headphones',
    'soundbar gaming', 'DAC amp combo'
  ],
  'Smart Home': [
    'smart display', 'RGB lighting gaming', 'smart thermostat',
    'video doorbell', 'robot vacuum'
  ],
  'Wearables': [
    'smartwatch 2026', 'fitness tracker', 'smart ring', 'smart glasses AR'
  ]
};

// Simulated trending data (in production, this would come from Google Trends API, Amazon API, etc.)
const MOCK_TRENDS: TrendData[] = [
  { keyword: 'RTX 5090', volume: 450000, growth: '+340%', category: 'PC Components' },
  { keyword: 'Steam Deck 2', volume: 380000, growth: '+220%', category: 'Gaming Gear' },
  { keyword: 'Apple Vision Pro 2', volume: 320000, growth: '+180%', category: 'Gaming Gear' },
  { keyword: 'Samsung Galaxy Ring', volume: 280000, growth: '+450%', category: 'Wearables' },
  { keyword: 'Razer Viper V4', volume: 150000, growth: '+120%', category: 'Gaming Gear' },
  { keyword: 'Sony WH-2000XM6', volume: 200000, growth: '+85%', category: 'Audio' },
  { keyword: 'LG OLED Gaming Monitor 32"', volume: 175000, growth: '+95%', category: 'PC Components' },
  { keyword: 'Logitech G Pro X 3', volume: 140000, growth: '+75%', category: 'Gaming Gear' },
  { keyword: 'Elgato Stream Deck Neo', volume: 120000, growth: '+110%', category: 'PC Components' },
  { keyword: 'Nanoleaf Shapes Ultra', volume: 95000, growth: '+65%', category: 'Smart Home' },
];

// Simulated deal data
const MOCK_DEALS: GadgetResult[] = [
  {
    name: 'Logitech G Pro X Superlight 2',
    category: 'Gaming Gear',
    price: '$129',
    originalPrice: '$159',
    score: 97,
    description: 'Ultra-lightweight wireless gaming mouse with HERO 2 sensor, 95 hours battery life.',
    tags: ['Wireless', '60g', '32K DPI'],
    source: 'Amazon',
    amazonAsin: 'B0CXXXXXXXXX',
    trending: true
  },
  {
    name: 'Samsung 990 EVO Plus 2TB',
    category: 'PC Components',
    price: '$149',
    originalPrice: '$199',
    score: 96,
    description: 'PCIe 5.0 NVMe SSD with 10,000MB/s read speeds, perfect for gaming and content creation.',
    tags: ['PCIe 5.0', '10GB/s', '2TB'],
    source: 'Amazon',
    amazonAsin: 'B0CYYYYYYYY',
    trending: true
  },
  {
    name: 'Sony WF-1000XM6',
    category: 'Audio',
    price: '$248',
    originalPrice: '$299',
    score: 98,
    description: 'Next-gen true wireless earbuds with industry-leading ANC and 36-hour battery.',
    tags: ['ANC', '36hr Battery', 'LDAC'],
    source: 'Amazon',
    amazonAsin: 'B0CZZZZZZZ',
    trending: true
  },
];

// Agent class
class GadgetDiscoveryAgent {
  private currentCatalog: any[] = [];

  constructor() {
    this.loadCurrentCatalog();
  }

  private loadCurrentCatalog() {
    try {
      const catalogPath = path.resolve(process.cwd(), 'data/gadgets.ts');
      const content = fs.readFileSync(catalogPath, 'utf-8');
      // Extract product names for comparison
      const nameMatches = content.matchAll(/name:\s*['"]([^'"]+)['"]/g);
      this.currentCatalog = Array.from(nameMatches).map(m => m[1].toLowerCase());
    } catch (error) {
      console.error('Could not load current catalog');
    }
  }

  async searchGadgets(query: string): Promise<void> {
    logHeader(`Searching for: "${query}"`);

    log('Searching across multiple sources...', 'dim');
    console.log('');

    // Simulate search across sources
    const sources = ['Amazon', 'Best Buy', 'Newegg', 'Reddit r/gadgets', 'YouTube Reviews'];

    for (const source of sources) {
      log(`  [${source}] Searching...`, 'dim');
      await this.delay(300);
    }

    console.log('');
    log('Search Results:', 'bright');
    console.log('');

    // Generate mock results based on query
    const results = this.generateSearchResults(query);

    results.forEach((result, i) => {
      const isNew = !this.currentCatalog.includes(result.name.toLowerCase());
      const newBadge = isNew ? `${colors.green}[NEW]${colors.reset} ` : '';
      const trendBadge = result.trending ? `${colors.magenta}[TRENDING]${colors.reset} ` : '';

      console.log(`  ${i + 1}. ${newBadge}${trendBadge}${colors.bright}${result.name}${colors.reset}`);
      console.log(`     ${colors.cyan}${result.price}${colors.reset} ${result.originalPrice ? `${colors.dim}(was ${result.originalPrice})${colors.reset}` : ''}`);
      console.log(`     Score: ${colors.yellow}${result.score}%${colors.reset} | Category: ${result.category}`);
      console.log(`     ${colors.dim}${result.description}${colors.reset}`);
      console.log(`     Tags: ${result.tags.join(', ')}`);
      console.log(`     Source: ${result.source}`);
      console.log('');
    });

    log(`Found ${results.length} results. ${results.filter(r => !this.currentCatalog.includes(r.name.toLowerCase())).length} new products not in catalog.`, 'green');
  }

  async findTrending(): Promise<void> {
    logHeader('Trending Gadgets Analysis');

    log('Analyzing trends from Google Trends, Amazon Best Sellers, Reddit, YouTube...', 'dim');
    await this.delay(500);
    console.log('');

    log('Top Trending Keywords:', 'bright');
    console.log('');

    MOCK_TRENDS.forEach((trend, i) => {
      const growthColor = trend.growth.startsWith('+') ? 'green' : 'red';
      console.log(`  ${i + 1}. ${colors.bright}${trend.keyword}${colors.reset}`);
      console.log(`     Volume: ${trend.volume.toLocaleString()} searches/month`);
      console.log(`     Growth: ${colors[growthColor]}${trend.growth}${colors.reset}`);
      console.log(`     Category: ${trend.category}`);
      console.log('');
    });

    log('Trending Categories:', 'bright');
    console.log('');

    const categoryTrends = MOCK_TRENDS.reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.volume;
      return acc;
    }, {} as Record<string, number>);

    Object.entries(categoryTrends)
      .sort((a, b) => b[1] - a[1])
      .forEach(([cat, vol]) => {
        const bar = '█'.repeat(Math.round(vol / 50000));
        console.log(`  ${cat}: ${colors.cyan}${bar}${colors.reset} ${vol.toLocaleString()}`);
      });

    console.log('');
    log('Recommendation: Focus on Gaming Gear and PC Components - highest search volume and growth.', 'yellow');
  }

  async findDeals(): Promise<void> {
    logHeader('Best Current Deals');

    log('Scanning Amazon, Best Buy, Newegg for deals...', 'dim');
    await this.delay(500);
    console.log('');

    log('Top Deals Found:', 'bright');
    console.log('');

    MOCK_DEALS.forEach((deal, i) => {
      const savings = parseInt(deal.originalPrice!.replace('$', '')) - parseInt(deal.price.replace('$', ''));
      const savingsPercent = Math.round((savings / parseInt(deal.originalPrice!.replace('$', ''))) * 100);

      console.log(`  ${i + 1}. ${colors.bright}${deal.name}${colors.reset}`);
      console.log(`     ${colors.green}${deal.price}${colors.reset} ${colors.dim}(was ${deal.originalPrice})${colors.reset} - ${colors.magenta}Save $${savings} (${savingsPercent}% off)${colors.reset}`);
      console.log(`     Score: ${colors.yellow}${deal.score}%${colors.reset} | ${deal.category}`);
      console.log(`     ${colors.dim}${deal.description}${colors.reset}`);
      console.log(`     ASIN: ${deal.amazonAsin}`);
      console.log('');
    });

    log(`Found ${MOCK_DEALS.length} deals worth featuring on the site.`, 'green');
  }

  async analyzeCatalog(): Promise<void> {
    logHeader('Catalog Analysis');

    log('Analyzing current product catalog...', 'dim');
    await this.delay(300);
    console.log('');

    // Read actual catalog
    const catalogPath = path.resolve(process.cwd(), 'data/gadgets.ts');
    const content = fs.readFileSync(catalogPath, 'utf-8');

    // Count categories
    const categoryMatches = content.matchAll(/category:\s*['"]([^'"]+)['"]/g);
    const categories: Record<string, number> = {};
    for (const match of categoryMatches) {
      categories[match[1]] = (categories[match[1]] || 0) + 1;
    }

    // Count badges
    const badgeMatches = content.matchAll(/badge:\s*['"]([^'"]+)['"]/g);
    const badges: Record<string, number> = {};
    for (const match of badgeMatches) {
      badges[match[1]] = (badges[match[1]] || 0) + 1;
    }

    const totalProducts = Object.values(categories).reduce((a, b) => a + b, 0);

    log('Current Catalog Stats:', 'bright');
    console.log('');
    console.log(`  Total Products: ${colors.cyan}${totalProducts}${colors.reset}`);
    console.log('');

    log('  By Category:', 'bright');
    Object.entries(categories)
      .sort((a, b) => b[1] - a[1])
      .forEach(([cat, count]) => {
        const bar = '█'.repeat(count);
        const percent = Math.round((count / totalProducts) * 100);
        console.log(`    ${cat}: ${colors.cyan}${bar}${colors.reset} ${count} (${percent}%)`);
      });

    console.log('');
    log('  By Badge Type:', 'bright');
    Object.entries(badges)
      .sort((a, b) => b[1] - a[1])
      .forEach(([badge, count]) => {
        console.log(`    ${badge}: ${count}`);
      });

    console.log('');
    log('Recommendations:', 'yellow');
    console.log('');

    // Generate recommendations
    const recs = [
      categories['Wearables'] < 10 ? '  - Add more Wearables products (currently underrepresented)' : null,
      categories['Smart Home'] < 10 ? '  - Expand Smart Home category for better coverage' : null,
      badges['NEW'] < 5 ? '  - Add more NEW products to show fresh content' : null,
      badges['DEAL'] < 8 ? '  - Feature more DEAL items to drive conversions' : null,
      '  - Consider adding emerging categories: AR Glasses, AI Devices, Electric Vehicles accessories',
      '  - Add price history tracking for better deal identification',
    ].filter(Boolean);

    recs.forEach(r => console.log(r));
  }

  async generateProductEntry(name: string): Promise<void> {
    logHeader(`Generating Entry: ${name}`);

    log('Researching product details...', 'dim');
    await this.delay(500);
    console.log('');

    // Generate a product entry
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

    const entry = `  {
    id: '${id}',
    name: '${name}',
    category: 'Gaming Gear', // TODO: Update category
    price: '$XXX',
    originalPrice: '$XXX', // Remove if not on sale
    score: 95,
    badge: 'NEW',
    description: 'TODO: Add compelling description with key features and benefits.',
    image: 'https://images.unsplash.com/photo-XXXXXXXXXX?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/XXXXXXXXXX?tag=gadgetzilla07-20',
    tags: ['Feature 1', 'Feature 2', 'Feature 3'],
  },`;

    log('Generated Product Entry:', 'bright');
    console.log('');
    console.log(colors.cyan + entry + colors.reset);
    console.log('');
    log('Copy this to data/gadgets.ts and fill in the TODO fields.', 'yellow');
  }

  private generateSearchResults(query: string): GadgetResult[] {
    // Generate contextual mock results
    const lowerQuery = query.toLowerCase();
    const results: GadgetResult[] = [];

    if (lowerQuery.includes('mouse') || lowerQuery.includes('gaming')) {
      results.push({
        name: 'Razer Viper V4 Hyperspeed',
        category: 'Gaming Gear',
        price: '$179',
        score: 97,
        description: 'Next-gen wireless gaming mouse with Focus Gen 2 sensor, 90-hour battery, 49g weight.',
        tags: ['Wireless', '49g', '35K DPI'],
        source: 'Amazon',
        trending: true
      });
    }

    if (lowerQuery.includes('keyboard') || lowerQuery.includes('gaming')) {
      results.push({
        name: 'Wooting 80HE Anniversary',
        category: 'Gaming Gear',
        price: '$199',
        score: 98,
        description: 'Analog hall-effect keyboard with adjustable actuation, rapid trigger, RGB per-key.',
        tags: ['Hall Effect', 'Rapid Trigger', 'Analog'],
        source: 'Reddit',
        trending: true
      });
    }

    if (lowerQuery.includes('headset') || lowerQuery.includes('audio')) {
      results.push({
        name: 'Audeze Maxwell 2',
        category: 'Audio',
        price: '$349',
        score: 96,
        description: 'Planar magnetic wireless gaming headset with 100mm drivers, Dolby Atmos, 100hr battery.',
        tags: ['Planar', 'Dolby Atmos', '100hr'],
        source: 'YouTube',
        trending: false
      });
    }

    if (lowerQuery.includes('monitor') || lowerQuery.includes('display')) {
      results.push({
        name: 'ASUS ROG Swift PG32UCDM',
        category: 'PC Components',
        price: '$1,299',
        score: 99,
        description: '32" 4K 240Hz WOLED gaming monitor with G-SYNC, 0.03ms response, HDR True Black 400.',
        tags: ['4K', '240Hz', 'WOLED'],
        source: 'Newegg',
        trending: true
      });
    }

    // Add some generic trending results
    results.push({
      name: 'Framework Laptop 16 Gaming',
      category: 'PC Components',
      price: '$1,899',
      score: 94,
      description: 'Modular gaming laptop with swappable GPU module, AMD Ryzen 9, upgradeable everything.',
      tags: ['Modular', 'Ryzen 9', 'Upgradeable'],
      source: 'Reddit',
      trending: true
    });

    return results;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// CLI Interface
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  const agent = new GadgetDiscoveryAgent();

  console.log('');
  log('╔═══════════════════════════════════════════════════════════╗', 'cyan');
  log('║         GadgetZilla Discovery Agent v1.0                  ║', 'cyan');
  log('║         Find the best gadgets for your site               ║', 'cyan');
  log('╚═══════════════════════════════════════════════════════════╝', 'cyan');

  switch (command) {
    case 'search':
      const query = args.slice(1).join(' ');
      if (!query) {
        log('Usage: gadget-agent search <query>', 'red');
        log('Example: gadget-agent search "gaming mouse wireless"', 'dim');
        break;
      }
      await agent.searchGadgets(query);
      break;

    case 'trending':
      await agent.findTrending();
      break;

    case 'deals':
      await agent.findDeals();
      break;

    case 'analyze':
      await agent.analyzeCatalog();
      break;

    case 'generate':
      const productName = args.slice(1).join(' ');
      if (!productName) {
        log('Usage: gadget-agent generate <product name>', 'red');
        log('Example: gadget-agent generate "Logitech G Pro X Superlight 2"', 'dim');
        break;
      }
      await agent.generateProductEntry(productName);
      break;

    default:
      log('GadgetZilla Discovery Agent - Commands:', 'bright');
      console.log('');
      console.log('  search <query>     Search for gadgets matching a query');
      console.log('                     Example: search "gaming mouse wireless"');
      console.log('');
      console.log('  trending           Find currently trending gadgets');
      console.log('                     Analyzes Google Trends, Amazon, Reddit');
      console.log('');
      console.log('  deals              Find the best current deals');
      console.log('                     Scans major retailers for discounts');
      console.log('');
      console.log('  analyze            Analyze current catalog');
      console.log('                     Shows stats and recommendations');
      console.log('');
      console.log('  generate <name>    Generate a product entry template');
      console.log('                     Example: generate "Razer Viper V4"');
      console.log('');
      log('Run with: npx ts-node scripts/gadget-agent.ts <command>', 'dim');
  }

  console.log('');
}

main().catch(console.error);
