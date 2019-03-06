const assert = require('chai').assert
const bubbleSort = require('./bubbleSort')

describe('Bubble Sort Algorithm', function() {
  it('can sort a very small array', function() {
    assert.deepEqual(bubbleSort([2,1]), [1,2])
  })
  it('can sort a three-item array', function() {
    assert.deepEqual(bubbleSort([3,2,1]), [1,2,3])
  })
  it('can sort a five-item array', function() {
    assert.deepEqual(bubbleSort([3,2,10,1,12]), [1,2,3,10,12])
  })
  it('can sort a large array', function() {
    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
    let sortedArray = [];
    for(let i=0; i<100; i++) { sortedArray.push(i) }
    let initialArray = shuffle(sortedArray)
    
    assert.deepEqual(bubbleSort(initialArray), sortedArray)
  })
  it('can sort a very large array', function() {
    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
    let sortedArray = [];
    for(let i=0; i<10000; i++) { sortedArray.push(i) }
    let initialArray = shuffle(sortedArray)
    
    assert.deepEqual(bubbleSort(initialArray), sortedArray)
  })
})