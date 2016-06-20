'use strict';

(function() {

	var eventObj = MORISAR.common.eventObj,
	DOMMethods = MORISAR.common.DOMMethods,
	square__functional = MORISAR.square.functional;

	function changeFig (event) {
		var data = DOMMethods.getAttr(event, 'data-button');
		if (data === 'Увеличить размер квадрата') {
			square__functional.changeSize('square', 'square_param', 10, 250, 20)

		} else if (data === 'Уменьшить размер квадрата') {
			square__functional.changeSize('square', 'square_param', -10, 250, 20)

		} else if (data === 'Изменить цвет квадрата') {
			square__functional.changeColor('square', 'square_param')

		} else if (data === 'Сброс квадрата') {
			square__functional.resetSize('square', 'square_param')

		} else if (data === 'Увеличить размер круга') {
			square__functional.changeSize('round', 'round_param', 10, 200, 20)

		} else if (data === 'Уменьшить размер круга') {
			square__functional.changeSize('round', 'round_param', -10, 200, 20)

		} else if (data === 'Изменить цвет круга') {
			square__functional.changeColor('round', 'round_param')

		} else if (data === 'Сброс круга') {
			square__functional.resetSize('round', 'round_param')
		};
	}

	function common () {
		
		square__functional.showParams('square', 'square_param');
		square__functional.showParams('round', 'round_param');

		eventObj.addEvent(document, 'click', changeFig);
		
	}

	eventObj.addEvent(window, 'load', common);
})();
