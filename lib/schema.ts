/**
 * LLM SEO Schema Utilities
 * Generates canonical URLs, breadcrumb schemas, and other structured data
 */

export function getCanonicalUrl(pathname: string): string {
  const baseUrl = 'https://miniermartech.com';
  return `${baseUrl}${pathname}`;
}

export function getBreadcrumbSchema(breadcrumbs: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://miniermartech.com${item.path}`,
    })),
  };
}

export const insightsBreadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Insights', path: '/insights' },
];

export const servicesBreadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
];
