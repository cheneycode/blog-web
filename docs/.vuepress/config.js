module.exports = {
   title: '微前端架构',
   description: '不止前端',
   themeConfig: {
      // 添加导航栏
      nav: [
          { text: '主页', link: '/' },
          { text: '最近', link: '/recently/' },
          { text: '前端面试',
              items: [
                  { text: 'HTTP', link: '/front/http/' },
                  { text: 'HTML', link: '/front/html/' },
                  { text: 'CSS', link: '/front/css/' },
                  { text: 'JS', link: '/front/js/' },
                  { text: 'Vue', link: '/front/vue/' },
                  { text: 'React', link: '/front/react/' },
              ]
          },
          { text: '服务端', link: '/after/'},
          { text: '生活', link: '/life/'},
          { text: '投资', link: '/invest/'},
          { text: '读书', link: '/book/'},
          { text: '关于我', link: '/about/'},
          { text: 'GitHub', link: 'https://github.com/cheneycode'}
       ],
      // 为以下路由添加左侧边栏
      sidebar: {
          '/recently/': [
              {
                  title: '近期更新',
                  collapsable: false,
                  children: [
                      { title: '更新测试01', path: '/recently/book1' },
                      { title: '更新测试02', path: '/recently/book2' },
                      { title: '更新测试03', path: '/recently/book3' },
                  ]
              }
          ],
        //   ,
        //   '/front/': [
        //       {
        //           title: '目录',
        //           collapsable: false,
        //           children: [
        //               { title: '1.v-if和v-show的区别', path: '/vue/#1.v-if和v-show的区别' },
        //               { title: '2.vue常用的修饰符', path: '/vue/#2.常用的修饰符' },
        //               { title: '3.vue中key值的作用', path: '/vue/#3.key值的作用' },
        //           ]
        //       }
        //   ],
          '/study/math/': [
              {
                  title: '数学',
                  collapsable: false,
                  children: [
                      { title: '第一节', path: '/study/math/math01' },
                      { title: '第二节', path: '/study/math/math02' },
                      { title: '第三节', path: '/study/math/math03' },
                  ]
              }
          ],
      },
      sidebarDepth: 2,//左侧导航显示的层级
      lastUpdated: 'Last Updated'
  }
}