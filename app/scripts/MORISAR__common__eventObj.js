'use strict';

MORISAR.namespace('MORISAR.common.eventObj');

MORISAR.common.eventObj = (function () {
	return {
		addEvent: function (e, type, fn) {
			if (typeof addEventListener !== 'undefined') {
				e.addEventListener(type, fn, false);
			} else if (typeof attachEvent !== 'undefined') {
				e.attachEvent('on' + type, fn);
			} else {
				e['on' + type] = fn;
			}
		},

		removeEvent: function (e, type, fn) {
			if (typeof removeEventListener !== 'undefined') {
				e.removeEventListener(type, fn, false);
			} else if (typeof attachEvent !== 'undefined') {
				e.detachEvent('on' + type, fn);
			} else {
				e['on' + type] = null;
			}
		},

		getTarget: function (event) {
			var event = window.event || event;
			if (typeof event.target !== 'undefined') {
				return event.target; 
			} else {
				return evt.srcElement;
			};
		},

		preventDefault: function (event) {
			if (typeof event.preventDefault !== 'undefined') {
				event.preventDefault();
			} else {
				event.returnValue = false;
			};
		}
	};
}());
