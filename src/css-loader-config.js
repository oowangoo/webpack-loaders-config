import merge from './merge'

export const css = (config) => {
  const base = {
    loader: 'css-loader',
    options: {
      modules: true,
      camelCase: true,
      importLoaders: 1,
      localIdentName: '[name]-[local]-[hash:base64:4]'
    }
  }
  return merge(base, config)
}

export default css