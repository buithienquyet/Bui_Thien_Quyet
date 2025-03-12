/* 
O(n) time complexity
*/
function sum_to_n_a(n: number): number {
  let sum: number = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

/*
O(1) time complexity by using math
*/
function sum_to_n_b(n: number): number {
  return (n * (n + 1)) / 2;
}

/*
O(n) time complexity but with recursion
*/
function sum_to_n_c(n: number): number {
  return n === 1 ? 1 : n + sum_to_n_c(n - 1);
}

function main(): void {
  const n: number = 1;
  console.log(`Sum to ${n} of implementation a is ${sum_to_n_a(n)}`);
  console.log(`Sum to ${n} of implementation b is ${sum_to_n_b(n)}`);
  console.log(`Sum to ${n} of implementation c is ${sum_to_n_c(n)}`);
}

main();
