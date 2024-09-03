const themeDir = __dirname + '/../../';

module.exports = {
  content: [
    `${themeDir}/layouts/**/*.html`,
    `${themeDir}/content/**/*.md`
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({

        ...theme('colors'),

        'highlight': '#F6F6F6',
        'background': '#F5FDFC'
      })
    }
  },
  variants: {},
  plugins: []
}
