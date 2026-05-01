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
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_API_URL,
        pathname: "/uploads/**",
      }
    ],
  },
};

export default nextConfig;