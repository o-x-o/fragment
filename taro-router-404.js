path = './node_modules/@tarojs/router/dist/index.esm.js'
fragment = {
	key: "computeMatch",
	value: function computeMatch(location) {
		// 找出匹配的路由组件
		var originalPathname = location.path;
		var pathname = originalPathname;
		var foundRoute = this.customRoutes.filter(function (_ref) {
		var _ref2 = _slicedToArray(_ref, 2),
			originalRoute = _ref2[0],
			mappedRoute = _ref2[1];
		// fixed by jxl START : [ return originalPathname === mappedRoute; ] 改为
		if(mappedRoute && mappedRoute.indexOf('[[REG]]:')===0) {
			return new RegExp(mappedRoute.replace('[[REG]]:', '')).test(originalPathname);
		} else {
			return originalPathname === mappedRoute;
		}
		// fixed by jxl END
		});

		if (foundRoute.length) {
		pathname = foundRoute[0][0];
		}

		var matchedRoute = this.props.routes.filter(function (_ref3) {
		var path = _ref3.path,
			isIndex = _ref3.isIndex;
		if (isIndex && pathname === '/') return true;
		return pathname === path;
		});
		invariant_1(matchedRoute[0], "Can not find proper registered route for '".concat(pathname, "'"));
		return matchedRoute[0];
	}
}