import React from 'react';
import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const DEFAULT = {
  title: 'Touche Finale - Salon de Coiffure & Esthétique',
  description: 'Salon de coiffure et esthétique à Brazzaville. Coiffure, maquillage, soins de visage, manucure et pédicure.',
  url: 'https://touchefinale.vercel.app/',
  image: '/logo-r.png'
}

export const SEO: React.FC<SEOProps> = ({ title = DEFAULT.title, description = DEFAULT.description, url = DEFAULT.url, image = DEFAULT.image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default SEO;
