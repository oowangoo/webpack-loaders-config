import babel from './babel-loader-config'
import css from './css-loader-config'
import eslint from './eslint-loader.config'
import postcss from './postcss-loader-config'
import sass from './sass-loader-config'
import style from './style-loader-config'
import vue from './vue-loader-config'
import img from './img-loader-config'
import media from './media-loader-config'
import font from './font-loader-config'
import merge from './merge'

const loaders = { babel, css, eslint, postcss, sass, style, vue, img, media, font }

const Loader = (loader, config = {}) => {
  const loaderConfig = loaders[loader]
  if (typeof loaderConfig === 'undefined') {
    throw Error(`${loader}-loader 不存在`)
  }

  return merge(loaderConfig, config)
}

export { babel, css, eslint, postcss, sass, style, vue, img, media, font }

export default Loader