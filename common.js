function h1_crazy () {
	fig.changeColor("square", "square_param");
	fig.changeColor("round", "round_param");
};

function changeFig () {
	var data = page.getAttr('data-button');
	if (!data) {
		return

	} else if (data === 'Увеличить размер квадрата') {
		fig.changeSize("square", "square_param", 20, 300, 20)

	} else if (data === 'Уменьшить размер квадрата') {
		fig.changeSize("square", "square_param", -20, 300, 20)

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

fig.showParams("square", "square_param");
fig.showParams("round", "round_param");

fig.dragNDrop("square");
fig.dragNDrop("round");

eventObj.addEvent(page.getId('h_1'), 'mousemove', h1_crazy);
eventObj.addEvent(document, 'click', changeFig);