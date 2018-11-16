export const imports = {
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'src/Button/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-button-index" */ 'src/Button/index.mdx'),
}
