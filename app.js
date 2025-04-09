let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];
let sum = 0;

// Compare each element of set one with the second set and if element is not present then add that element to sum.
for (let i = 0; i < set1.length; i++) {
  if (!set2.includes(set1[i])) {
    sum += set1[i];
  }
}

// Then do the vice versa to add elements from the second set
for (let i = 0; i < set2.length; i++) {
  if (!set1.includes(set2[i])) {
    sum += set2[i];
  }
}

console.log(sum);

function dotProduct(v1, v2) {
  let ps = 0;
  for (let i = 0; i < v1.length; i++) {
    ps += v1[i] * v2[i];
  }
  return ps;
}

function checkOrthogonality(vectors) {
  for (let i = 0; i < vectors.length; i++) {
    for (let j = i + 1; j < vectors.length; j++) {
      let v1 = vectors[i];
      let v2 = vectors[j];
      let dotProductResult = dotProduct(v1, v2);
      if (dotProductResult === 0) {
        console.log(`Vectors ${i} and ${j} are orthogonal.`);
      } else {
        console.log(`Vectors ${i} and ${j} are not orthogonal.`);
      }
    }
  }
}

let vectors = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [0, 0, 0],
  [1, 0, 0],
];

checkOrthogonality(vectors);
