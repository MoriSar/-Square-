'use strict';

MORISAR.namespace('MORISAR.functional.paramsViewCtrl');

MORISAR.functional.paramsViewCtrl = (function () {
	var sys_domCtrl = MORISAR.system.DOMCtrl;

	return {
		showParams: function(id, p) {
			var cssProperties = sys_domCtrl.getStyle(id),
			width = cssProperties.width,
			height = cssProperties.height,
			bgColor = cssProperties.backgroundColor,
			bRadius = cssProperties.borderRadius,
			params = sys_domCtrl.getId(p);

			return params.innerHTML = '<p>Текущая ширина объекта: ' + width + '.<br>Текущая высота объекта: ' + height + '.<br>Текущий цвет фона объекта и цвета строк: ' + bgColor + '.</p>';
		}
	}
}());
