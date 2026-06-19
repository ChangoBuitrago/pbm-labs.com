import { siteConfig } from "@/lib/site-config";

export function JsonLd() {
  const { line2, city, state, zip, country } = siteConfig.address;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: `https://${siteConfig.domain}`,
    email: siteConfig.email,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: line2,
      addressLocality: city,
      addressRegion: state,
      postalCode: zip,
      addressCountry: country,
    },
    areaServed: "United States",
    serviceType: [
      "Technology Consulting",
      "Custom Software Development",
      "Identity Infrastructure",
      "IoT Platform Engineering",
      "Security Architecture",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
