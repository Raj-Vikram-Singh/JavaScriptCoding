const S1 = 'ab#c#d#';
const S2 = 'ad#c';

const makeNewList = function(list, newList) {
  list.forEach((item, index) => {
    if (item === '#') {
      newList.pop();
    } else {
      newList.push(item);
    }
  })
}

const compareString = function(S1, S2) {
  const S1List = S1.split("");
  const S2List = S2.split("");
  const newSl1 = [];
  const newSl2 = [];

  makeNewList(S1List, newSl1);
  makeNewList(S2List, newSl2);

  const S1String = newSl1.join("");
  const S2String = newSl2.join("");
  console.log(S1String, S2String); // "a", "ac"
  return S1String === S2String;
}



console.log(compareString(S1, S2));
