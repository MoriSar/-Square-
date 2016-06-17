'use strict';

MORISAR.namespace('MORISAR.functional.sizeCtrl');

MORISAR.functional.sizeCtrl = (function () {
	var sys_domCtrl = MORISAR.system.DOMCtrl,
	paramsView = MORISAR.functional.paramsViewCtrl;

	return {
		changeSize: function(id, p, value, maxSize, minSize) {
			var cssProperties = sys_domCtrl.getStyle(id),
			value = parseInt(value),
			maxSize = maxSize,
			minSize = minSize;

			if (parseInt(cssProperties.width) >= maxSize) {
				alert('Максимальный размер')
			} else if (parseInt(cssProperties.width) <= minSize) {
				alert('Минимальынй размер')
			} else {
				if (value >= 0) {
					sys_domCtrl.getId(id).style.width = parseInt(cssProperties.width) + value + 'px';
					sys_domCtrl.getId(id).style.height = parseInt(cssProperties.height) + value + 'px';
				};
				if (value <= 0) {
					sys_domCtrl.getId(id).style.width = parseInt(cssProperties.width) + value + 'px';
					sys_domCtrl.getId(id).style.height = parseInt(cssProperties.height) + value + 'px';
				};
			};

			paramsView.showParams(id, p);
		},

		resetSize: function(id, p) {
			var text = sys_domCtrl.getId(p);

			sys_domCtrl.getId(id).style.width = '';
			sys_domCtrl.getId(id).style.height = '';
			sys_domCtrl.getId(id).style.backgroundColor = '';
			sys_domCtrl.getId(id).style.borderRadius = '';
			text.style.color = '';

			paramsView.showParams(id, p);
		},

		changeColor: function(id, p) {

			sys_domCtrl.getId(id).style.backgroundColor = randomRGBColor();

			paramsView.showParams(id, p);

			function randomRGBColor () {
				var r = randomInteger(0, 255);
				var g = randomInteger(0, 255);
				var b = randomInteger(0, 255);

				return 'rgb(' + r + ', ' + g + ', ' + b + ')';
			};

			function randomInteger(min, max) {
				var rand = min + Math.floor(Math.random() * (max + 1 - min));

				return rand;
			};
		}
	}
}());
