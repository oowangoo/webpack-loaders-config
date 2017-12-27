export const media = {
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  loader: 'url-loader',
  options: {
    limit: 8192,
    name: 'media/[name].[hash:8].[ext]'
  }
}

export default media