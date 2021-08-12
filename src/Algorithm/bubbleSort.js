export function bubbleSort (array) {
  var animation = [];
  var result = bubbleSortHelper(animation, array);
  return result;
} 

function bubbleSortHelper (animation, array) {
  var temp  = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < (array.length - i - 1); j++) {

      // two values that we are going to compare... 
      animation.push([j, j + 1]);

      // two values that we are going to change to original color after
      // comparing is done
      animation.push([j, j + 1]);


      if (array[j] > array[j + 1]) {

        // pushing animation for the swapping
        // left bar css property overrides the right bar's css property and vice versa
        // first parameter = index of the element
        // second parameter = height of the element bar
        animation.push([j, array[j + 1]]);
        animation.push([j + 1, array[j]]);

        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        
      } else {

        // pushing animation for the swapping 
        animation.push([j, array[j]]);
        animation.push([j + 1, array[j + 1]]);
      }
    }
  }
  
  return animation;
}
