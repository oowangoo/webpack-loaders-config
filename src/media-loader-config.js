import merge from './merge'

export const media = (config) => {
  const base = {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 8192,
      name: 'media/[name].[hash:8].[ext]'
    }
  }
  return merge(base, config)
}

export default media