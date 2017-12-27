export const eslint = {
  enforce: 'pre',
  test: /\.(jsx?|vue)$/,
  loader: 'eslint-loader',
  exclude: /node_modules/,
  options: {}
}

export default eslint