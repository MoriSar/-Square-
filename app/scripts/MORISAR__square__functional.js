'use strict';

MORISAR.namespace('MORISAR.square.functional');

MORISAR.square.functional = (function () {
	var DOMMethods = MORISAR.common.DOMMethods;

	return {
		showParams: function(id, p) {
			var cssProperties = DOMMethods.getStyle(id),
			width = cssProperties.width,
			height = cssProperties.height,
			bgColor = cssProperties.backgroundColor,
			bRadius = cssProperties.borderRadius,
			params = DOMMethods.getId(p);

			return params.innerHTML = '<p>Текущая ширина объекта: ' + width + '.<br>Текущая высота объекта: ' + height + '.<br>Текущий цвет фона объекта и цвета строк: ' + bgColor + '.</p>';
		},

		changeSize: function(id, p, value, maxSize, minSize) {
			var cssProperties = DOMMethods.getStyle(id),
			value = parseInt(value),
			maxSize = maxSize,
			minSize = minSize;

			if (value >= 0) {
				if (parseInt(cssProperties.width) >= maxSize) {
					alert('Максимальный размер');
					return false;
				} else {
					DOMMethods.getId(id).style.width = parseInt(cssProperties.width) + value + 'px';
					DOMMethods.getId(id).style.height = parseInt(cssProperties.height) + value + 'px';
				}
			};
			
			if (value <= 0) {
				if (parseInt(cssProperties.width) <= minSize) {
					alert('Минимальынй размер');
					return false;
				} else {
					DOMMethods.getId(id).style.width = parseInt(cssProperties.width) + value + 'px';
					DOMMethods.getId(id).style.height = parseInt(cssProperties.height) + value + 'px';
				}
			};

			this.showParams(id, p);
		},

		resetSize: function(id, p) {
			var text = DOMMethods.getId(p);

			DOMMethods.getId(id).style.width = '';
			DOMMethods.getId(id).style.height = '';
			DOMMethods.getId(id).style.backgroundColor = '';
			DOMMethods.getId(id).style.borderRadius = '';
			text.style.color = '';

			this.showParams(id, p);
		},

		changeColor: function(id, p) {

			DOMMethods.getId(id).style.backgroundColor = randomRGBColor();

			this.showParams(id, p);

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
