const { override, addWebpackResolve } = require('customize-cra')
const path = require('path')

const ROOT_PATH = path.resolve(__dirname)
const SRC_PATH = path.resolve(ROOT_PATH, 'src')
const IMG_PATH = path.resolve(SRC_PATH, 'assets', 'img')

module.exports = override(
  addWebpackResolve({
    alias: {
      _Home: SRC_PATH,
      _Images: IMG_PATH,
    },
  }),
)
