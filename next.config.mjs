// @ts-check
import rehypeHighlight from 'rehype-highlight'
import createMDX from '@next/mdx'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false,
      },
    ]
  },
  output: 'standalone',
}

const withMDX = createMDX({
  // md plugins
  options: {
    rehypePlugins: [rehypeHighlight]
  }
})

export default withMDX(nextConfig)
