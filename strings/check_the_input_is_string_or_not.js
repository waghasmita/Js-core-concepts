is_string = function(input) {
  if (Object.prototype.toString.call(input) === '[object String]')
    return true;
  else
    return false;
    };
console.log(is_string('application'));
console.log(is_string([14334]));
