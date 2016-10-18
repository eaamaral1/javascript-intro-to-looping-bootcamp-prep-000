
function forLoop(array){
  for (var i = 1; i < 25; i++){
  array[i] = (`I am ${i} strange loops.`);
}
return array;
}

function whileLoop(number){
  while (number > 0){
    console.log(number);
    number --;
  }
  return 'done';
}

function doWhileLoop(array){

  function maybeTrue(){
    return Math.random() >= 0.5;
  }

  do {
    array.pop();
  } while (maybeTrue() || array.length > 0);

  return array;
}
