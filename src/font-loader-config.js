import merge from './merge'

export const font = (config) => {
  const base = {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 8192,
      name: 'font/[name].[hash:8].[ext]'
    }
  }
  return merge(base, config)
}

export default font