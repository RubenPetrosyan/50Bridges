import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fiftybridges.com";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },

    { url: `${baseUrl}/owner-operator-truck-insurance/` },
    { url: `${baseUrl}/commercial-truck-insurance/` },
    { url: `${baseUrl}/small-fleet-truck-insurance/` },
    { url: `${baseUrl}/semi-truck-insurance/` },
    { url: `${baseUrl}/cargo-insurance/` },
    { url: `${baseUrl}/truck-liability-insurance/` },
    { url: `${baseUrl}/physical-damage-insurance/` },

    { url: `${baseUrl}/truck-insurance-50-U.S.-States/` },
    { url: `${baseUrl}/faq/` },
  ];
}
