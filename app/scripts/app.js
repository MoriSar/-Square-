'use strict';

(function() {

	function changeFig (event) {
		var data = page.getAttr(event, 'data-button');
		if (data === 'Увеличить размер квадрата') {
			fig.changeSize('square', 'square_param', 10, 250, 20)

		} else if (data === 'Уменьшить размер квадрата') {
			fig.changeSize('square', 'square_param', -10, 250, 20)

		} else if (data === 'Изменить цвет квадрата') {
			fig.changeColor('square', 'square_param')

		} else if (data === 'Сброс квадрата') {
			fig.reset('square', 'square_param')

		} else if (data === 'Увеличить размер круга') {
			fig.changeSize('round', 'round_param', 10, 200, 20)

		} else if (data === 'Уменьшить размер круга') {
			fig.changeSize('round', 'round_param', -10, 200, 20)

		} else if (data === 'Изменить цвет круга') {
			fig.changeColor('round', 'round_param')

		} else if (data === 'Сброс круга') {
			fig.reset('round', 'round_param')
		};
	}

	function common () {
		
		fig.showParams('square', 'square_param');
		fig.showParams('round', 'round_param');

		eventObj.addEvent(document, 'click', changeFig);
		
	}

	eventObj.addEvent(window, 'load', common);
})()