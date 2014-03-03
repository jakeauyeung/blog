fis.config.merge({
  roadmap: {
    path: [{
      //map.json文件
      reg: 'map.json',
      //发布到/config/map.json
      release: false
    }]
  },
  deploy: {
    build: {
      //from参数省略，表示从发布后的根目录开始上传
      //发布到当前项目的上一级的output目录中
      to: 'min'
    }
  }
});

// 打包合并配置项
// fis.config.merge({
//   roadmap: {
//     path: [{
//       //map.json文件
//       reg: 'map.json',
//       //发布到/config/map.json
//       release: false
//     }, {
//       //map.json文件
//       reg: '**/om.min_z.png',
//       //发布到/config/map.json
//       release: 'static/img/min/om.min_z.png'
//     }]
//   },
//   pack: {
//     'static/mincss/om.min.css': '**.less',
//     'static/minjs/om.min.js': '**.js'
//   },
//   deploy: {
//     build: {
//       //from参数省略，表示从发布后的根目录开始上传
//       //发布到当前项目的上一级的output目录中
//       to: '../build/'
//     },
//     batai: {
//       //from参数省略，表示从发布后的根目录开始上传
//       //发布到当前项目的上一级的output目录中
//       to: 'D:/XAMPP/htdocs/',
//       exclude: /\/(css|js)\//i
//     },
//     wuchen: {
//       to: 'C:/xampp/htdocs'
//     }
//   }
// });
