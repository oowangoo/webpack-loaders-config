export const font = {
  test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
  loader: 'url-loader',
  options: {
    limit: 8192,
    name: 'font/[name].[hash:8].[ext]'
  }
}

export default font