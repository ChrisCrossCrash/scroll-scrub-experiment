/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  plugins: ['@snowpack/plugin-sass'],
  mount: {
    src: '/',
  },
  devOptions: {
    port: 43000,
    hostname: '0.0.0.0',
    open: 'none',
  },
  buildOptions: {
    out: 'docs',
    baseUrl: '/scroll-scrub-experiment/',
    metaUrlPath: 'snowpack',
  },
}
