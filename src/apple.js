const AppleProto = Object.create(HTMLElement.prototype);

const Apple = {
	createdCallback() {		
		// template		
		this.innerHTML = `
			<h1>Hello World!</h1>
			<button id="test">Click Me!</button>
		`
		// select testButton
		this.testButton = this.querySelector("#test")
		// event binding
		this.testButton.addEventListener("click", this.hide)		
	},

	hide(data) {
		data.target.setAttribute("hidden", "")
	}
}

Object.assign(AppleProto, Apple);

document.registerElement("x-apple", {
	prototype: AppleProto
})
