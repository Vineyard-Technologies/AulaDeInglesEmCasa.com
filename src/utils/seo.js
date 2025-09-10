// SEO utility functions for managing meta tags and schema markup

export const updateMetaTags = (meta) => {
  // Update title
  if (meta.title) {
    document.title = meta.title;
  }

  // Update meta description
  updateMetaTag('name', 'description', meta.description);
  
  // Update Open Graph tags
  updateMetaTag('property', 'og:title', meta.title);
  updateMetaTag('property', 'og:description', meta.description);
  updateMetaTag('property', 'og:url', meta.url);
  updateMetaTag('property', 'og:image', meta.image);
  
  // Update Twitter Card tags
  updateMetaTag('name', 'twitter:title', meta.title);
  updateMetaTag('name', 'twitter:description', meta.description);
  updateMetaTag('name', 'twitter:image', meta.image);
  
  // Update canonical URL
  updateCanonical(meta.url);
};

const updateMetaTag = (attribute, name, content) => {
  if (!content) return;
  
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
};

const updateCanonical = (url) => {
  if (!url) return;
  
  let canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', url);
  } else {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', url);
    document.head.appendChild(canonical);
  }
};

export const addStructuredData = (schemaData) => {
  // Remove existing structured data
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schemaData);
  document.head.appendChild(script);
};

// Schema markup templates
export const createPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Andrew Christopher Rogers",
  "jobTitle": "Professor de Inglês",
  "description": "Professor americano de inglês com mais de 10 anos de experiência, especializado em aulas personalizadas para brasileiros.",
  "nationality": "American",
  "knowsLanguage": ["English", "Portuguese"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Campo Grande",
    "addressRegion": "MS",
    "addressCountry": "BR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-67-99616-1199",
    "contactType": "customer service",
    "availableLanguage": ["English", "Portuguese"]
  }
});

export const createEducationServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Aulas de Inglês em Casa",
  "description": "Serviços de ensino de inglês personalizados em Campo Grande, MS, oferecidos por professor americano nativo.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Campo Grande",
    "addressRegion": "MS",
    "addressCountry": "BR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-67-99616-1199",
    "contactType": "customer service",
    "email": "contato@auladeinglesemcasa.com"
  },
  "serviceType": "English Language Education",
  "provider": {
    "@type": "Person",
    "name": "Andrew Christopher Rogers"
  },
  "areaServed": {
    "@type": "City",
    "name": "Campo Grande",
    "addressRegion": "MS",
    "addressCountry": "BR"
  }
});

export const createServiceSchema = (serviceName, description) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Person",
    "name": "Andrew Christopher Rogers"
  },
  "areaServed": {
    "@type": "City",
    "name": "Campo Grande",
    "addressRegion": "MS",
    "addressCountry": "BR"
  },
  "serviceType": "English Language Education"
});

// Page-specific SEO data
export const pageMetaData = {
  home: {
    title: "Início | Aulas de Inglês em Casa | Campo Grande, MS",
    description: "Aulas de inglês personalizadas em Campo Grande, MS com Andrew Rogers. Professor americano nativo com mais de 10 anos de experiência. Aulas online, individuais e em grupo.",
    url: "https://auladeinglesemcasa.com",
    image: "https://auladeinglesemcasa.com/AulasDeInglesEmCasaLogo.webp"
  },
  about: {
    title: "Sobre | Aulas de Inglês em Casa | Campo Grande, MS",
    description: "Conheça Andrew Rogers, professor americano de inglês em Campo Grande, MS. Mais de 10 anos de experiência e 5 anos focado em alunos brasileiros.",
    url: "https://auladeinglesemcasa.com/sobre",
    image: "https://auladeinglesemcasa.com/AulasDeInglesEmCasaLogo.webp"
  },
  contact: {
    title: "Contato | Aulas de Inglês em Casa | Campo Grande, MS",
    description: "Entre em contato para agendar suas aulas de inglês em Campo Grande, MS. WhatsApp: (67) 99616-1199 ou email: contato@auladeinglesemcasa.com",
    url: "https://auladeinglesemcasa.com/contato",
    image: "https://auladeinglesemcasa.com/AulasDeInglesEmCasaLogo.webp"
  }
};
