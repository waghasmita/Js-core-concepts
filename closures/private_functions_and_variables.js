//Example shows how to create private functions & variable.

var counter = (function() {
	  var privateCounter = 0;
	  function changeBy(val) {
		privateCounter += val;
	  }
	  return {
		increment: function() {
		  changeBy(1);
		},
		decrement: function() {
		  changeBy(-1);
		},
		value: function() {
		  return privateCounter;
		}
	  };   
	})();

	alert(counter.value()); 
	counter.increment();
	counter.increment();
	alert(counter.value());
	counter.decrement();
	alert(counter.value()); 

/* In the above example, increment(), decrement() and value() becomes public function 
because they are included in the return object, whereas changeBy() function 
becomes private function because it is not returned and 
only used internally by increment() and decrement(). */