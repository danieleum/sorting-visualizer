export function insertionSort (array) {
  var animation = [];
  var result = insertionSortHelper(animation, array);
  return result;
} 

function insertionSortHelper(animation, array) {
  let n = array.length;

  for (let i = 1; i < n; i++) {
    let current = array[i];

    // first -> current index that we are comparing
    // second -> the height of the bar
    // third -> is this pivot
    // fourth -> change pivot color
    // fifth -> revert pivot color
    // sixth -> is this non-pivot
    // seventh -> change non-pivot color
    // eighth -> revert non-pivot color
    // nineth -> overwrite the height
    animation.push([i, array[i], true, true, false, false, false, false]);

    let j = i - 1;


    while ((j >= 0)) {

      animation.push([j, array[i], false, false, false, true, true, false]);

      if (array[j] > current) {

        animation.push([j + 1, array[j], false, false, false, false, false, false])

        array[j + 1] = array[j];


      } else {
        animation.push([j, array[i], false, false, false, true, false, true]);
        break;
      }

      animation.push([j, array[i], false, false, false, true, false, true]);
      j--;
    }

    animation.push([j + 1, current, false, false, false, false, false, false])
    array[j + 1] = current;

    animation.push([i, array[i], true, false, true, false, false, false]);
  }

  return animation;
}