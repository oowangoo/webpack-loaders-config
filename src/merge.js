export const merge = (base = {}, config = {}) => {
  const keys = Object.keys(config)

  return keys.reduce((target, key) => {
    const value = config[key]
    if (key === 'options') {
      target.options = merge(target.options, config.options)
      return target
    }

    target[key] = value
    return target
  }, Object.assign({}, base))
}

export default merge