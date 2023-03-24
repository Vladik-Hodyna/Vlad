window.addEventListener('load', function () {
  let mybutton = document.getElementById("scrollBtn");

	window.onscroll = function() {
		scrollFunction()
	};

	function scrollFunction() {
	  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	    mybutton.style.display = "block";
	  } else {
	    mybutton.style.display = "none";
	  }
	}
})
