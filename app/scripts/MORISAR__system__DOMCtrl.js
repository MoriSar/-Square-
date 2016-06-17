'use strict';

MORISAR.namespace('MORISAR.system.DOMCtrl');

MORISAR.system.DOMCtrl = (function () {
	var sys_events = MORISAR.system.events;
	
	return {

		getId: function(id) {
			return document.getElementById(id)
		},

		getTag: function(tag) {
			return document.getElementsByTagName(tag)
		},

		getAttr: function(event, attr) {
			var target = sys_events.getTarget(event);
			var data = target.getAttribute(attr);

			return data;
		},

		getName: function(name) {
			return document.getElementsByName(name);
		},

		getClass: function(className) {
			return document.getElementsByClassName(className)
		},

		getStyle: function(id) {
			this.getId(id);
			return window.getComputedStyle(this.getId(id))
		},

		addClass: function(id, className) {
			var e = this.getId(id);
			return e.classList.add(className);
		},

		removeClass: function(id, className) {
			var e = this.getId(id);
			return e.classList.remove(className);
		}
	}
}());
