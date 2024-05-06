/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: './dist', // Changes the build output directory to `./dist/`.
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