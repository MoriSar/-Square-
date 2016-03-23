"use strict";

(function() {
	
	function getBrowserId () {
		var
		aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
		sUsrAg = navigator.userAgent, nIdx = aKeys.length - 1;
		for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);
			return nIdx
	}

	function checkBrowserFirefox() {
		if (getBrowserId() == 1) {
			return true
		}
	};

	function changeFig () {
		var data = page.getAttr('data-button');
		if (!data) {
			return

		} else if (data === 'Увеличить размер квадрата') {
			fig.changeSize("square", "square_param", 10, 250, 20)

		} else if (data === 'Уменьшить размер квадрата') {
			fig.changeSize("square", "square_param", -10, 250, 20)

		} else if (data === 'Изменить цвет квадрата') {
			fig.changeColor("square", "square_param")

		} else if (data === 'Сброс квадрата') {
			fig.reset("square", "square_param")

		} else if (data === 'Увеличить размер круга') {
			fig.changeSize("round", "round_param", 10, 200, 20)

		} else if (data === 'Уменьшить размер круга') {
			fig.changeSize("round", "round_param", -10, 200, 20)

		} else if (data === 'Изменить цвет круга') {
			fig.changeColor("round", "round_param")

		} else if (data === 'Сброс круга') {
			fig.reset("round", "round_param")
		};
	}

	function common () {
		if (getBrowserId() == true) {
			return alert("Работа этого приложения не поддерживается в браузере Firefox!")
		} else {
			fig.showParams("square", "square_param");
			fig.showParams("round", "round_param");

			eventObj.addEvent(document, 'click', changeFig);
		}
	}

	eventObj.addEvent(window, 'load', common);

})()
