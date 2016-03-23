"use strict";

var eventObj = {
	addEvent: function (e, type, fn) {
		if (typeof addEventListener !== "undefined") {
			e.addEventListener(type, fn, false);
		} else if (typeof attachEvent !== "undefined") {
			e.attachEvent('on' + type, fn);
		} else {
			e['on' + type] = fn;
		}
	},

	removeEvent: function (e, type, fn) {
		if (typeof removeEventListener !== "undefined") {
			e.removeEventListener(type, fn, false);
		} else if (typeof attachEvent !== "undefined") {
			e.detachEvent('on' + type, fn);
		} else {
			e['on' + type] = null;
		}
	},

	getTarget: function (event) {
		event = event || window.event;
		if (typeof event.target !== "undefined") {
			return event.target; 
		} else {
			return event.srcElement;
		};
	},

	preventDefault: function (event) {
		if (typeof event.preventDefault !== "undefined") {
			event.preventDefault();
		} else {
			event.returnValue = false;
		};
	}
};