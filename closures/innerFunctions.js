//Closure is valid in multiple levels of inner functions.

function Counter() {
    
		var counter = 0;

		setTimeout( function () {
			var innerCounter = 0;
			counter += 1;
			alert("counter = " + counter);

			setTimeout( function () {
				counter += 1;
				innerCounter += 1;
				alert("counter = " + counter + ", innerCounter = " + innerCounter)
			}, 500);

		}, 1000);
	};

	Counter();