var path = require('path')
var base = path.resolve(__dirname, '../../')
module.exports = {
  tags: {
    allowUnknownTags: true,
    dictionaries: [
      'jsdoc',
      'closure'
    ]
  },
  opts: {
    'destination': `${base}/docs`,
    'encoding': 'utf8',
    'template': 'theme'
  },
  plugins: [
    'jsdoc-vue',
    'jsdoc/plugins/markdown',
    'plugins/slot.js',
    'plugins/demo.js',
    'plugins/usage.js',
    'plugins/props.js',
    'plugins/component.js'
  ],
  markdown: {
    tags: [
      'props',
      'usage',
      'component',
      'demo',
      'slot'
    ],
    parser: 'gfm',
    hardwrap: true
  },
  source: {
    include: [
      `${base}/README.md`,
      `${base}/src/util`,
      `${base}/src/config/config.js`,
      `${base}/src/config/history.js`,
      `${base}/src/config/platform.js`,
      `${base}/src/components/app`,
      `${base}/src/components/content`,
      `${base}/src/components/page`,
      `${base}/src/components/nav`,
      `${base}/src/components/navbar`,
      `${base}/src/components/button`,
      `${base}/src/components/toolbar`,
      `${base}/src/components/segment`,
      `${base}/src/components/slides`,
      `${base}/src/components/slides-lite`,
      `${base}/src/components/tabs`,
      `${base}/src/components/alert`,
      `${base}/src/components/action-sheet`,
      `${base}/src/components/loading`,
      `${base}/src/components/modal`,
      `${base}/src/components/toast`,
      `${base}/src/components/indicator`,
      `${base}/src/components/infinite-scroll`,
      `${base}/src/components/refresher`,
      `${base}/src/components/list`,
      `${base}/src/components/item`,
      `${base}/src/components/avatar`,
      `${base}/src/components/thumbnail`,
      `${base}/src/components/note`,
      `${base}/src/components/label`,
      `${base}/src/components/input`,
      `${base}/src/components/checkbox`,
      `${base}/src/components/radio`,
      `${base}/src/components/range`,
      `${base}/src/components/searchbar`,
      `${base}/src/components/select`,
      `${base}/src/components/toggle`,
      `${base}/src/components/spinner`,
      `${base}/src/components/img`,
      `${base}/src/components/icon`,
      `${base}/src/components/card`,
      `${base}/src/components/badge`,
      `${base}/src/components/backdrop`,
      `${base}/src/components/menus`,
      `${base}/src/components/grid`,
      `${base}/src/components/scroll`,
      `${base}/src/components/popover`,
      `${base}/src/components/picker`,
      `${base}/src/components/fab`,
      `${base}/src/components/datetime`,
      `${base}/src/components/separation`,
      `${base}/src/components/noticebar`,
      `${base}/src/components/scroll-segment`,
      `${base}/src/components/slide-box`,
      `${base}/src/components/city-picker`,
      `${base}/src/components/feedback`,
      `${base}/src/components/preview-image`,
      `${base}/src/components/choose-city`,
      `${base}/src/components/sheet`,
      `${base}/src/components/pop-sheet`
    ],
    exclude: [
      'gulpfile.js'
    ],
    includePattern: '.+\\.js(doc|x)?$|.+\\.vue$',
    excludePattern: '(^|\\/|\\\\)_'
  },
  templates: {
    'cleverLinks': false,
    'monospaceLinks': false,
    'default': {
      'outputSourceFiles': true,
      'includeDate': false
    }
  },
  docdash: {
    'static': true,
    'sort': true,
    'homeName': '首页 / Home',
    'demoUrl': 'https://vm-component.github.io/vimo-demo',
    'links': [
      {
        'name': '如何开始 / How To Start',
        'link': 'https://github.com/vm-component/vimo-start-kit'
      },
      {
        'name': '更新日志 / Change Log',
        'link': 'https://github.com/vm-component/Vimo/blob/master/CHANGELOG.md'
      },
      {
        'name': '常见问题 / Question',
        'link': '#'
      }
    ]
  }
}
