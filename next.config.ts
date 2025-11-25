import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    // Active le polling pour détecter les changements de fichiers dans Docker
    config.watchOptions = {
      poll: 1000, // Vérifie les changements toutes les 1000ms (1 seconde)
      aggregateTimeout: 300, // Délai avant de recompiler après un changement
    };
    return config;
  },
};

export default nextConfig;
