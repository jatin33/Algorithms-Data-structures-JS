// no depth
function flat(arr, depth = 1) {
    const out = [];
  
    function inner(arr, depth) {
        // console.log('arr', arr);
        // console.log('depth', depth);
      arr.forEach((item) => {
          console.log('item', item);
        if (Array.isArray(item) && depth > 0) {
          inner(item, depth - 1);
        } else {
          out.push(item);
        }
      })
    }
  
    inner(arr, depth);
  
    return out;
  }
  

  console.log(flat([1, [2], [3, [4, 5, 6, [7, 8, [9]]]]], 3));