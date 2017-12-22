export const css = () => {
  return {
    loader: 'css-loader',
    options: {
      modules: true,
      camelCase: true,
      importLoaders: 1,
      localIdentName: '[name]-[local]-[hash:base64:4]'
    }
  }
}

export default css