import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fifty Bridges Truck Insurance",
    short_name: "Fifty Bridges",
    description:
      "Independent truck insurance broker helping owner-operators and trucking companies across the USA.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111111",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
