function Page () {}
function Figure () {}

Page.prototype.getId = function(id) {
	return document.getElementById(id)
};

Page.prototype.getTag = function(tag) {
	return document.getElementsByTagName(tag)
};

Page.prototype.getAttr = function(attr) {
	var target = eventObj.getTarget(window.event);
	var data = target.getAttribute(attr);
	
	return data;
};
Page.prototype.getName = function(name) {
	return document.getElementsByName(name);
};

Page.prototype.getClass = function(className) {
	return document.getElementsByClassName(className)
};

Page.prototype.getStyle = function(id) {
	this.getId(id);
	return window.getComputedStyle(this.getId(id))
};

Page.prototype.addClass = function(id, className) {
	var e = this.getId(id);
	return e.classList.add(className);
};

Page.prototype.removeClass = function(id, className) {
	var e = this.getId(id);
	return e.classList.remove(className);
};

Page.prototype.showParams = function(id, p) {
	var cssProperties = this.getStyle(id);
	var width = cssProperties.width;
	var height = cssProperties.height;
	var bgColor = cssProperties.backgroundColor;
	var bRadius = cssProperties.borderRadius;
	var params = document.getElementById(p);

	return params.innerHTML = "<p>Текущая ширина объекта: " + width + ".<br>Текущая высота объекта: " + height + ".<br>Текущий цвет фона объекта и цвета строк: " + bgColor + ".</p>";
};

Page.prototype.reset = function(id, p) {
	var text = document.getElementById(p);

	this.getId(id).style.width = "";
	this.getId(id).style.height = "";
	this.getId(id).style.backgroundColor = "";
	this.getId(id).style.borderRadius = "";
	text.style.color = "";

	this.showParams(id, p);
};

Page.prototype.dragNDrop = function(id) {
	var item = this.getId(id);

	item.onmousedown = function(e) {

		var coords = getCoords(item);
		var shiftX = e.pageX - coords.left;
		var shiftY = e.pageY - coords.top;

		item.style.position = 'absolute';
		document.body.appendChild(item);
		moveAt(e);

		item.style.zIndex = 1000;

		function moveAt(e) {
			item.style.left = e.pageX - shiftX + 'px';
			item.style.top = e.pageY - shiftY + 'px';
		}

		document.onmousemove = function(e) {
			moveAt(e);
		};

		item.onmouseup = function() {
			document.onmousemove = null;
			item.onmouseup = null;
		};

	}

	item.ondragstart = function() {
		return false;
	};

	function getCoords(elem) { // кроме IE8-
		var box = elem.getBoundingClientRect();

		return {
			top: box.top + pageYOffset,
			left: box.left + pageXOffset
		};

	}
};

Figure.prototype = Object.create(Page.prototype);

Figure.prototype.changeSize = function(id, p, value, maxSize, minSize) {
	var cssProperties = this.getStyle(id);
	var value = parseInt(value);
	var maxSize = maxSize;
	var minSize = minSize;

	if (parseInt(cssProperties.width) >= maxSize) {
		alert("Максимальный размер")
	} else if (parseInt(cssProperties.width) <= minSize) {
		alert("Минимальынй размер")
	} else {
		if (value >= 0) {
			this.getId(id).style.width = parseInt(cssProperties.width) + value + "px";
			this.getId(id).style.height = parseInt(cssProperties.height) + value + "px";
		};
		if (value <= 0) {
			this.getId(id).style.width = parseInt(cssProperties.width) + value + "px";
			this.getId(id).style.height = parseInt(cssProperties.height) + value + "px";
		};
	};

	this.showParams(id, p);
};

Figure.prototype.changeColor = function(id, p) {

	this.getId(id).style.backgroundColor = randomRGBColor();

	this.showParams(id, p);

	function randomRGBColor () {
		var r = randomInteger(0, 255);
		var g = randomInteger(0, 255);
		var b = randomInteger(0, 255);

		return "rgb(" + r + ", " + g + ", " + b + ")";
	};

	function randomInteger(min, max) {
		var rand = min + Math.floor(Math.random() * (max + 1 - min));

		return rand;
	};
};

var page = new Page();
var fig = new Figure();