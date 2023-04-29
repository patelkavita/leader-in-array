const findLeaderInArray = function(array) {
  let leaders = [];
  leaders.push(array[0]);
  for(let index = 1; index < array.length; index++) {
    while(leaders[leaders.length - 1] < array[index]) {
      leaders.pop();
    }
    leaders.push(array[index]);
  }

  return leaders;
}

exports.findLeaderInArray = findLeaderInArray;
