export function mergeSort(array) {
  let animation = [];
  let helperArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, helperArray, animation);
  return animation;
}

function mergeSortHelper(array, start, last, helperArray, animation) {
  if (start !== last) {
    let middle = Math.floor((start + last) / 2);
    mergeSortHelper(helperArray, start, middle, array, animation);
    mergeSortHelper(helperArray, middle + 1, last, array, animation);
    mergeHelper(array, start, middle, last, helperArray, animation);
  }
}

function mergeHelper(array, start, middle, last, helperArray, animation) {
  let tempIndex = start;
  let left = start;
  let right = middle + 1;
  while (left <= middle && right <= last) {

    /*
    third -> are we comparing?
    fourth -> change the color for comparing
    fifth -> revert the color to original
    */
    animation.push([left, right, true, true, false]);

    animation.push([left, right, true, false, true]);

    if (helperArray[left] <= helperArray[right]) {
      animation.push([tempIndex, helperArray[left], false, false, false]);

      array[tempIndex] = helperArray[left];
      tempIndex++;
      left++;
    } else {
      animation.push([tempIndex, helperArray[right], false, false, false]);

      array[tempIndex] = helperArray[right];
      tempIndex++;
      right++;
    }
  }

  while (left <= middle) {
    animation.push([left, left, true, true, false]);
    animation.push([left, left, true, false, true]);
    animation.push([tempIndex, helperArray[left], false, false, false]);

    array[tempIndex] = helperArray[left];
    tempIndex++;
    left++;
  }

  while (right <= last) {
    animation.push([right, right, true, true, false]);
    animation.push([right, right, true, false, true]);
    animation.push([tempIndex, helperArray[right], false, false, false]);

    array[tempIndex] = helperArray[right];
    tempIndex++;
    right++;
  }
}
