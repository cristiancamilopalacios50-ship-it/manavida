

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "1337",
                pathname: "/uploads/**",
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