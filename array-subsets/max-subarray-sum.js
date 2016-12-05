/*
Max SubArray Sum Problem (Codility)

A non-empty zero-indexed array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P ≤ Q < N, is called a slice of array A. The sum of a slice (P, Q) is the total of A[P] + A[P+1] + ... + A[Q].

Write a function: given an array A consisting of N integers, returns the maximum sum of any slice of A.
*/


// (O(n) solution)
// Uses 2 pointers(2 sums) to determine the max, accumulating the sum along the way

function solution(A) {
    let maxEnding = A[0];
    let maxSoFar = A[0];
    for(let i = 1; i < A.length; i++){
        maxEnding = Math.max(A[i], maxEnding + A[i]);
        maxSoFar = Math.max(maxEnding, maxSoFar);
    }
    return maxSoFar;
}	


