function count(str, letter) {
  return str.split("").filter(function(item) {
  return item === letter;
  }).length;

} 

console.log(count('djvdsihsdjh', 'd'))
