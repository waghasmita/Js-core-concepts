/* For loop that will iterate from 0 to 15 to find even and odd numbers  */

for (var x=0; x<=15; x++) {
        if (x === 0) {
                console.log(x +  " is even");
        }
        else if (x % 2 === 0) {
                console.log(x + " is even");
        }
        else {
                console.log(x + " is odd");
        }
}
