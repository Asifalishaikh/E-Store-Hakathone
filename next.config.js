/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        RemotePatterns: [
            {
                protocol: "https",
                hostname: "full-stack-ecommerce-clothing-web.vercel.app",
                port: "",
                pathname:"/**",
            }
        ]
    }
}

module.exports = nextConfig
