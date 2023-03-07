function capitalizeFirst(arr) {
    return arr.map(str => str.charAt(0)
    .toUpperCase() + str.slice(1));
  }
  console.log(capitalizeFirst(['hello', 'world']))