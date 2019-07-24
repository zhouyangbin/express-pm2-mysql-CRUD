const pkg = require('./package')

// module.exports = {
//   mode: 'universal',
//   head: {
//     title: pkg.name,
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { hid: 'description', name: 'description', content: pkg.description }
//     ],
//     link: [
//       { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
//     ]
//   },
//   loading: { color: '#3B8070' },
//   css: [
//   ],
//   plugins: [
//   ],

//   modules: [
//   ],
//   build: {
//     extend(config, ctx) {
//     }
//   }
// }
module.exports = {
    dev:false,  //这个很重要，true为开发模式(nuxt自己实现热加载)，false为生产模式
    //以下配置项请看文档
    build: {
      vendor: ['axios']
    },
    css: [ ],
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
      ],
      link: []
    }
  };
