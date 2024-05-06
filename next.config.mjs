/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    // define host pattern that next/image can show images from outside the website
    images: {
      remotePatterns: [
        {
          hostname: '*',
        },
      ],
    },
  }
   
  export default nextConfig