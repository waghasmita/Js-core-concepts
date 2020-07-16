function array_binarySearch(array, element) {
   var position = Math.floor(array.length / 2);

   if (narray[position] === element){
      return position;
   }
   else if (array.length === 1)
   {
      return null;
   }
   else if (narray[position] < element) {
      var arr = array.slice(position + 1);
      var res = array_binarySearch(arr, element);
      if (res === null)
      {
         return null;
      }
      else {
         return position + 1 + res;
      }
   }
   else {
      var arr1 = array.slice(0, position);
      return array_binarySearch(arr1, element);
   }
}

 var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
 console.log(array_binarySearch(myArray, 6));
