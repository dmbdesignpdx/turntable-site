!function(){
//
// Variables
//

const
install = document.querySelector("#install"),
original = install.value



//
// Functions
//

/**
 * @name copyLink
 * @description Copies link
 * @returns {undefined}
 */
install.addEventListener("click", e => {
   const btn = e.target

   btn.select()

   // Try copying
	try {
		document.execCommand("copy")
      btn.value = "copied!"

      // Reset link value
      let reset = setTimeout(() => {
         btn.value = original
			clearTimeout(reset)
      }, 2000)
   
   // Else just select
   } catch (e) {
		btn.select()
	}
})
}()
