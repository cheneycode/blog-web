// // 使用异步函数也是可以的
// export default ({
//     Vue, // VuePress 正在使用的 Vue 构造函数
//     options, // 附加到根实例的一些选项
//     router, // 当前应用的路由实例
//     siteData, // 站点元数据
//     isServer // 当前应用配置是处于 服务端渲染 或 客户端
//   }) => {
//     // ...做一些其他的应用级别的优化
//   }

export default ({ router }) => {
	if(typeof process === 'undefined' || process.env.VUE_ENV !== 'server') {
		router.onReady(() => {
			const { app } = router;

			app.$once("hook:mounted", () => {
				setTimeout(() => {
					const { hash } = document.location;
                    if (hash.length > 1) {
            		const id = decodeURIComponent(hash.substring(1));
            		const element = document.getElementById(id);
            		if (element) element.scrollIntoView();
          }
				}, 500);
			});	
		});
	}
}