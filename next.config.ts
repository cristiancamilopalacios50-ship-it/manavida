const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },  
      {
        protocol: "https",
        hostname: "dominio-tienda.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;