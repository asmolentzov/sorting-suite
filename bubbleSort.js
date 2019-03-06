function bubbleSort(numbers) {
  let end = numbers.length;
  for(let n=0; n<end; n++) {
    for(let i=0; i<end; i++) {
      if(numbers[i] > numbers[i + 1]) {
        placeHolder = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = placeHolder;
      };
    };
    end--;
  }
  return numbers;
}

module.exports = bubbleSort;