'use strict';

(function() {

	var sys_events = MORISAR.system.events,
	sys_domCtrl = MORISAR.system.DOMCtrl,
	fun_paramsViewCtrl = MORISAR.functional.paramsViewCtrl,
	fun_sizeCrtl = MORISAR.functional.sizeCtrl;

	function changeFig (event) {
		var data = sys_domCtrl.getAttr(event, 'data-button');
		if (data === 'Увеличить размер квадрата') {
			fun_sizeCrtl.changeSize('square', 'square_param', 10, 250, 20)

		} else if (data === 'Уменьшить размер квадрата') {
			fun_sizeCrtl.changeSize('square', 'square_param', -10, 250, 20)

		} else if (data === 'Изменить цвет квадрата') {
			fun_sizeCrtl.changeColor('square', 'square_param')

		} else if (data === 'Сброс квадрата') {
			fun_sizeCrtl.resetSize('square', 'square_param')

		} else if (data === 'Увеличить размер круга') {
			fun_sizeCrtl.changeSize('round', 'round_param', 10, 200, 20)

		} else if (data === 'Уменьшить размер круга') {
			fun_sizeCrtl.changeSize('round', 'round_param', -10, 200, 20)

		} else if (data === 'Изменить цвет круга') {
			fun_sizeCrtl.changeColor('round', 'round_param')

		} else if (data === 'Сброс круга') {
			fun_sizeCrtl.resetSize('round', 'round_param')
		};
	}

	function common () {
		
		fun_paramsViewCtrl.showParams('square', 'square_param');
		fun_paramsViewCtrl.showParams('round', 'round_param');

		sys_events.addEvent(document, 'click', changeFig);
		
	}

	sys_events.addEvent(window, 'load', common);
})();
