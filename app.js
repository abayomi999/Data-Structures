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
