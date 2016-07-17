"use strict";

var AppleProto = Object.create(HTMLElement.prototype);

var Apple = {
	createdCallback: function createdCallback() {
		// template		
		this.innerHTML = "\n\t\t\t<h1>Hello World!</h1>\n\t\t\t<button id=\"test\">Click Me!</button>\n\t\t";
		// select testButton
		this.testButton = this.querySelector("#test");
		// event binding
		this.testButton.addEventListener("click", this.hide);
	},
	hide: function hide(data) {
		data.target.setAttribute("hidden", "");
	}
};

Object.assign(AppleProto, Apple);

document.registerElement("x-apple", {
	prototype: AppleProto
});