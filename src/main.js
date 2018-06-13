!function(){
// -- Vars
const install = document.querySelector("#install"),
original = install.value


// -- Functions

// Copy Install
install.onclick = function() {
	this.select()
	try {
		document.execCommand("copy")
		this.value = "copied!"
		let a = setTimeout(() => {
			this.value = original
			clearTimeout(a)
		}, 2000)
	} catch (e) {
		this.select()
	}
}


// -- Invoke
}()
