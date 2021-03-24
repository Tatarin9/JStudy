const arr1 = [1, 5, 3, 6, 2];
const arr2 = [3, 4, 7, 1, 8, 9];

let arr3 = arr1.concat(arr2);
arr3 = [...new Set([...arr1, ...arr2])];

const parCreate = document.createElement("p");
document.body.appendChild(parCreate);
parCreate.innerHTML = arr3.sort();

console.log(arr3.sort());
