export function selectionSort (array) {
  var animation = [];
  var result = selectionSortHelper(animation, array);
  return result;
} 


function selectionSortHelper(animation, array) {
  let index = array.length;

  for (let i = 0; i < index - 1; i++) {
    let minIndex = i;
    
    // first -> bar that we are highlighting for minIndex
    // third -> change minIndex color
    // fourth -> changing the minIndex color to show that we are comparing it
    // fifth -> changing the minIndex index bar color to show that we are done comparing it
    // sixth -> changing the "j" index bar color
    // seventh -> changing the "j" index bar color to show that we are comparing it
    // eighth -> changing the "j" index bar color to show that we are done comparing it
    animation.push([minIndex, minIndex, true, true, false, false, false, false]);

    for (let j = i + 1; j < index; j++) {

      animation.push([j, j, false, false, false, true, true, false]);

      if (array[j] < array[minIndex]) {

        // to change the minIndex bar color back to normal
        //animation.push([minIndex, minIndex, true, false, true, false, false, false]);

        minIndex = j;

        // to change the color of the new minIndex
        //animation.push([minIndex, minIndex, true, true, false, false, false, false]);
      }

      animation.push([j, j, false, false, false, true, false, true]);

    }

    if (minIndex !== i) {

      // overwrite height of array[i] with array[minHeight]
      animation.push([minIndex, array[i], false, false, false, false, false, false]);

      // overwrite height of array[minIndex] with array[i]
      animation.push([i, array[minIndex], false, false, false, false, false, false]);

      // animation.push([i, i, false, false, false, true, false, true]);

    } 

    animation.push([minIndex, minIndex, true, false, true, false, false, false]);

    let temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;

    
  }

  return animation;
}

