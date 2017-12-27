export const img = {
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  loader: 'url-loader',
  options: {
    limit: 8192,
    name: 'img/[name].[hash:8].[ext]'
  }
}

export default img